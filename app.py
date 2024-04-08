from flask import Flask, make_response,request, jsonify
from models import db, User, Rider, Owner,Customer, Meal, Restaurant, Review, Payment, Order
from flask_migrate import Migrate

app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] ="sqlite:///uber.db"
app.config['SQLALCHEMY_TRACK_MODIFICATION'] = False
db.init_app(app)

migrate = Migrate(app, db)
app.json.compact = False


@app.route('/')
def hello():
    return "<h2>Hello world</h2>"


#Customer: all Customers
@app.route('/customers')
def viewallcustomers():
    customers = Customer.query.all()
    customers_list = [meal.to_dict() for meal in customers]
    return make_response(jsonify(customers_list), 200)


#Customer : viewMeals
@app.route('/meals')
def allmeals():
    meals = Meal.query.all()
    meal_dict = [meal.to_dict() for meal in meals]
    return make_response(jsonify(meal_dict), 200)

#Customer: makeOrder
@app.route('/place_order', methods=['POST'])
def placeOrder():
    meals = request.get_json()['meals']    #or meals = request.get_json().get('meals)
    
    total_price = 0

    # new_order = Order(price=request.get_json().get('price'), ride_id = request.get_json().get('ride_id'), customer_id=request.get_json().get('customer_id'))
    new_order = Order(price=0, ride_id=0, customer_id=request.get_json()['customer_id'])

    #Loop through each id
    for meal in meals:
        #At at this -> id <- get its entire row/ its associate data
        my_meal= Meal.query.get(meal)
    
        #we want to have total price of all our order
        total_price += my_meal.price
        new_order.meals.append(my_meal)   #append to the meal_order list

    #adjust the whole order's total price
    new_order.price = total_price

    db.session.add(new_order)
    db.session.commit()

    return make_response(new_order.to_dict(), 201)

#customer cancel order
@app.route('/customer/order/<int:order>/cancel')
def cancelOrder(order):
    order_id = order
    my_order = Order.query.get_or_404(order_id)
    my_order.status = 'Canceled'

    db.session.add(my_order)
    db.session.commit()

    return f"Your order for which includes {my_order.meals[0].name} has been canceled"


# rider.seeRidesRequest
@app.route('/rider/requests')
def allrides():
    orders = Order.query.filter_by(ride_id=0).all()
    order = [order.to_dict() for order in orders]
    return order

# rider.acceptRide
@app.route('/rider/requests/<int:orderId>', methods=['POST'])
def riderAcceptOrder(orderId):
    order = Order.query.get(orderId)

    if order is None:
        return jsonify({"ERROR" : "Order based on the id provided deosn't exist"}), 404
    
    if order.status == 'Canceled':
        return jsonify({"ERROR" : "Seems order has been canceled"}), 400  #Bad request
    
    if order.ride_id != 0:
        return jsonify({"ERROR": "The order unavailable"})
    
    order.ride_id = 1 #Logged in user.id
    db.session.add(order)
    db.session.commit()
    return jsonify({"status": "You have accepted the order"}), 200


#rider.declineRide
@app.route('/rider/requests/<int:orderId>/decline', methods=['POST'])
def riderDeclinesOrder(orderId):
    order = Order.query.get(orderId)

    if order is None:
        return jsonify({"ERROR" : "The order you looking for does not exist"}), 404
    
    if order.status != 'requested':
        return jsonify({"ERROR": "Seems the order either in Progress, Canceled or Delivered"}), 400  #Bad request

    order.ride_id = 0  #///

    # db.session.add(order)
    # db.session.commit()
    return make_response(jsonify({"Message" : "You have successfully declined the order."}), 200)


 #ro.addRestaurant
@app.route('/restaurant', methods=['POST'])
def addRestaurant():
    add_resto = request.get_json()

    name = add_resto.get('name')
    location = add_resto.get('location')

    resto_in_db = Restaurant.query.filter_by(name=name).first()
    if resto_in_db:
        return make_response(jsonify({"ERROR" : "Name already exist"}), 400)
    added_resto = Restaurant(name=name, location=location)
    db.session.add(added_resto)
    db.session.commit()

    return make_response(jsonify({"Message": "Restaurant added successfully"}),201)


#ro.addMeal
@app.route('/meals', methods=['POST'])
def addMeal():
    name = request.form.get('name')
    price = request.form.get('price')
    description = request.form.get('description')
    image = request.form.get('image')
    resto_id = request.form.get('resto_id')
    
    #we filter based on the meal and restaurant id as our unique constraint
    meal_in_resto_db = Meal.query.filter_by(name=name, resto_id=resto_id).first()
    if meal_in_resto_db:
        return make_response(jsonify({"Message":"Meal already posted in the restaurant"}), 400)
    
    new_meal = Meal(name=name, price=price, description=description, image=image, resto_id=resto_id)
    db.session.add(new_meal)
    db.session.commit()

    return jsonify({"Message":"Meal added to the restaurant"}), 201


#rider.completeRide
@app.route('/rider/requests/<int:orderId>/decline', methods=['POST'])
def rider_order_completed(orderId):
    order = Order.query.get(id=orderId)

    if orderId is None:
        return jsonify({"ERROR": "Order was not found"}), 404

    order.ride_id = 'current_user.id'
    order.status = 'Completed'

    return jsonify({"Message": "Your order has been completed successfully!"})

#see all restaurants
@app.route('/restaurants')
def all_restaurants():
    restos = Restaurant.query.all()
    list_all_resto = [resto.to_dict() for resto in restos]
    # for resto in restos:
    #     list_all_resto.append(resto).to_dict()
    print(list_all_resto)
    return list_all_resto, 200
            

#click on a restaurant
@app.route('/restaurants/<int:id>/meals')
def individual_restaurant(id):
    resto = Restaurant.query.get(id)
    print(resto)
    if resto is None:
        return jsonify({"ERROR": "Restaurant not found"}), 404
    #I want to fetch the list of meals
    meals =[meal.to_dict() for meal in resto.meals]
    print(meals)
    
    return jsonify({"meals": meals}), 200

#select an individual meal and see its details
@app.route('/meals/<int:id>')
def meal_detail(id):
    meal = Meal.query.get(id)
    selected_meal={
        "name" : meal.name,
        "price" : meal.price,
        "description" : meal.description,
        "image"   : meal.image,
        "resto": meal.resto_id}
    # print(selected_meal)
    
    return jsonify({"meal": selected_meal})













if __name__ == '__main__':
    app.run(debug=True)
