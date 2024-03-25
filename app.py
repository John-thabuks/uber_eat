from flask import Flask, make_response,request, jsonify
from models import db, User, Rider, Owner,Customer, Meal, Restaurant, Review, Payment
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
@app.route('/customer/order/<int:id>', methods=['POST'])
def customerOrder(id):
    pass







if __name__ == '__main__':
    app.run(debug=True)
