from flask import Flask, make_response,request, jsonify
# from models import db, User, Rider, Owner,Customer, Meal, Restaurant, Review, Payment, Order
from flask_bcrypt import Bcrypt
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
# models.py
from sqlalchemy import MetaData
from flask_cors import CORS
import jwt

metadata = MetaData()

db = SQLAlchemy(metadata=metadata)

app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] ="sqlite:///uber.db"
app.config['SQLALCHEMY_TRACK_MODIFICATION'] = False
app.config["SECRET_KEY"]= '99ef48d18d71a73bc01a3162631d005b'
db.init_app(app)

migrate = Migrate(app, db)
app.json.compact = False

bcrypt = Bcrypt(app)
CORS(app)

