from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy import MetaData

metadata = MetaData()

db = SQLAlchemy(metadata=metadata)

meal_order = db.Table(
    'meal_orders',
    db.Column('order_id', db.Integer, db.ForeignKey('orders.id')),
    db.Column('meal_id', db.Integer, db.ForeignKey('meals.id'))
)

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, unique=True)

    rider = db.relationship('Rider', backref='userz')
    userCustomer = db.relationship('Customer',backref='user')
    userOwner = db.relationship('Owner', backref='user')

class Rider(db.Model, SerializerMixin):
    __tablename__ = 'riders'

    id = db.Column(db.Integer, primary_key=True)
    # name = db.Column(db.String, unique=True)
    bike_type = db.Column(db.String)
    plate_number = db.Column(db.String, unique=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))

    reviews = db.relationship('Review', backref='rider')
    orders = db.relationship("Order", backref='rider')



class Owner(db.Model, SerializerMixin):
    __tablename__ = 'owners'

    id = db.Column(db.Integer, primary_key = True)
    location = db.Column(db.String)
    # name = db.Column(db.String)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))



class Customer(db.Model, SerializerMixin):
    __tablename__ = "customers"

    id = db.Column(db.Integer, primary_key=True)
    address = db.Column(db.String)
    wallet = db.Column(db.Integer)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))

    payments= db.relationship('Payment', backref='customer')
    order = db.relationship('Order', backref='customer')
    reviews = db.relationship('Review', backref='customer')


class Meal(db.Model, SerializerMixin):
    __tablename__ = "meals"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    price = db.Column(db.Integer)
    description = db.Column(db.String)
    image = db.Column(db.String)
    resto_id = db.Column('Restaurant', db.ForeignKey('restaurants.id'))

    order = db.relationship('Order', secondary=meal_order, back_populates='meals')


class Restaurant(db.Model, SerializerMixin):
    __tablename__ = "restaurants"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, unique=True)
    location = db.Column(db.String)
    
    # customers = db.relationship('Customer', backref='resto')
    meals = db.relationship('Meal', backref ='resto')

    reviews = db.relationship('Review', backref='resto')

class Review(db.Model, SerializerMixin):
    __tablename__ = "reviews"

    id = db.Column(db.Integer, primary_key = True)
    comments = db.Column(db.String)
    rating = db.Column(db.Integer)
    rider_id = db.Column(db.Integer, db.ForeignKey('riders.id'))
    resto_id = db.Column(db.Integer, db.ForeignKey('restaurants.id'))
    customer_id = db.Column(db.Integer, db.ForeignKey("customers.id"))

    # rider_review = db.relationship('Rider', backref='rider')
    # resto_review = db.relationship('Restaurant', backref= 'restoz')

class Payment(db.Model, SerializerMixin):
    __tablename__ = "payments"

    id = db.Column(db.Integer, primary_key=True)
    amount = db.Column(db.Integer)
    customer_id = db.Column(db.Integer, db.ForeignKey('customers.id'))
    order_id = db.Column(db.Integer, db.ForeignKey('orders.id'))

class Order(db.Model, SerializerMixin):
    __tablename__ = 'orders'

    id = db.Column(db.Integer, primary_key=True)
    price = db.Column(db.Integer)
    ride_id = db.Column(db.Integer, db.ForeignKey('riders.id'))
    customer_id = db.Column(db.Integer, db.ForeignKey('customers.id'))

    payment = db.relationship('Payment', backref='order')
    meals = db.relationship('Meal', secondary=meal_order, back_populates='order')


