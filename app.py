from flask import Flask
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












if __name__ == '__main__':
    app.run(debug=True)
