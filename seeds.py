from models import db, Rider, Owner, Customer, Meal, Restaurant, Review, Payment, Order, User
from faker import Faker
import random
import string
from app import app 

# db.init_app(app)

fake = Faker()

with app.app_context():

    alphabet_letters = list(string.ascii_uppercase)

    bike_types =[ "Kayosaki", "Honda", "Yamaha", "SkyGo", "motocross", "enduro"]

    User.query.delete()
    Rider.query.delete()
    Owner.query.delete()
    Customer.query.delete()
    Restaurant.query.delete()
    Review.query.delete()
    Payment.query.delete()
    Order.query.delete()
    Meal.query.delete()
    

    #User
    for i in range(50):
        name = fake.name()

        new_user = User(name=name)
        db.session.add(new_user)
    print("finished seeding  user")

    #Rider
    for i in range(10):
        # name = fake.name()
        byke_type =random.choice(bike_types)
        plate_no = f"KMT{random.choice(alphabet_letters)}{random.choice(alphabet_letters)} {random.randint(100, 999)}{random.choice(alphabet_letters)}"
        user_id = i + 1

        new_rider = Rider(bike_type=byke_type, plate_number=plate_no, user_id=user_id)
        db.session.add(new_rider)

    print("finished seeding  Rider")

    #Owner
    for i in range(10):
        location= fake.address()
        user_id = i+11

        new_owner = Owner(location=location,  user_id= user_id)
        db.session.add(new_owner)

    print("finished seeding  Owner")

    #Customer
    for i in range(10):
        address = fake.address()
        wallet = random.randint(1000, 9999)
        user_id = i + 21

        new_customer = Customer(address=address, wallet=wallet, user_id=user_id)
        db.session.add(new_customer)

    print("finished seeding  Customer")    

    #Meal
    for i in range(10):
        name = f"meal {fake.word()}"
        price = random.randint(10, 100)
        description = fake.sentence()
        image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRftZVukcnrPxwBMP-DkDxZ6_B6E_P08GKn3Q&usqp=CAU"
        resto_id = i + 1

        new_meal = Meal(name=name, price=price, description=description, image=image, resto_id=resto_id)
        db.session.add(new_meal)
    print("finished seeding  Meal")  
        

    #restaurant
    for i in range(10):
        name= fake.name()
        location= fake.address()

        new_resto = Restaurant(name=name, location=location)
        db.session.add(new_resto)

    print("finished seeding  Restaurant")

    #Review Rider
    for i in range(10):
        comment = fake.text()
        rating = random.randint(1,10)
        rider_id = i +1
        resto_id = None

        new_review = Review(comments=comment, rating=rating, rider_id=rider_id, resto_id=resto_id)
        db.session.add(new_review)
    print("finished seeding  Rider_Reviews")

    #Review restaurant
    for i in range(10):
        comment = fake.text()
        rating = random.randint(1,10)
        rider_id = None
        resto_id = i +1

        new_review = Review(comments=comment, rating=rating, rider_id=rider_id, resto_id=resto_id)
        db.session.add(new_review)
    print("finished seeding  Review_Restaurant")


    #Order
    for i in range(10):
        price= random.randint(10, 100)
        rider_id = 0
        customer_id = i +1

        new_order = Order(price=price, ride_id=rider_id, customer_id=customer_id)
        db.session.add(new_order)
    print("finished seeding  Order")


    db.session.commit()

    #meal_orders
    all_orders = db.session.query(Order).all()
    all_meals = db.session.query(Meal).all()

    for order in all_orders:
        order.meals.append(random.choice(all_meals))
        order.meals.append(random.choice(all_meals))
        order.meals.append(random.choice(all_meals))

    db.session.commit()
