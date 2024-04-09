## Methods

1.
2. rider.seeRidesRequest
3. rider.acceptRide
4. rider.declineRide
5. rider.completeRide and send alert to RO and customer
6. rider.viewMyCompleteRides

### RO

1. ro.addRestaurant
2. ro.addMeal
3. ro.seeMyOrders
4. RO.requestRide
5. ro.viewPayments

## customer

1. customer.viewMeals
2. customer.makeOrder
   - record meals in meal-order table (meal_id, order_id)
   - record the price
   - ride_id
   - customer_id
3. customer.makePayment
4. customer.cancelOrder
   - customer can cancel an order
   - Status 'cancelled`
5. customer.reviewOrder
6. customer.reviewRider
7. customer.viewpreviousOrders
8. customer.depositWallet

# UBER_EAT SYSTEM

## Description

The project aims to create a full-stack application for a food delivery service similar to Uber Eats. The frontend is developed using React.js, providing features for customers to browse meals, place orders, and view order history. The backend is built with Flask, SQLAlchemy, and Flask-Restful, handling user authentication, order processing, and restaurant management.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository to your local machine:

```bash
git clone <repository-url>
```

2. Navigate to the project directory:

```bash
cd <project-directory>
```

3. Install frontend dependencies:

```bash
npm install
```

4. Install backend dependencies:

```bash
pip install -r requirements.txt
```

## Usage

To run the application locally, follow these steps:

1. Start the Flask backend server:

```bash
python app.py
```

2. Start the React frontend server:

```bash
npm start
```

3. Open your web browser and navigate to `http://localhost:3000` to access the application.

## API Endpoints

### Authentication

- `POST /api/auth/register`

  - Description: Register a new user.
  - Request: JSON object containing user data (name, email, password)
  - Response: Newly created user object

- `POST /api/auth/login`
  - Description: Authenticate user login.
  - Request: JSON object containing user credentials (email, password)
  - Response: JSON Web Token (JWT) for authenticated user

### Restaurants

- `POST /api/restaurants`

  - Description: Add a new restaurant.
  - Request: JSON object containing restaurant data (name, location)
  - Response: Newly created restaurant object

- `GET /api/restaurants`
  - Description: Retrieve a list of all restaurants.
  - Request: None
  - Response: Array of restaurant objects

### Meals

- `POST /api/meals`

  - Description: Add a new meal to a restaurant's menu.
  - Request: JSON object containing meal data (name, price, description, image)
  - Response: Newly created meal object

- `GET /api/meals`
  - Description: Retrieve a list of all available meals.
  - Request: None
  - Response: Array of meal objects

### Orders

- `POST /api/orders`

  - Description: Place a new order.
  - Request: JSON object containing order details (customer_id, meal_ids)
  - Response: Newly created order object

- `GET /api/orders`
  - Description: Retrieve a list of all orders.
  - Request: None
  - Response: Array of order objects

## User Stories

### MVP

#### Rider

As a **rider**, I can:

1.  **See Ride Requests**

    - Access a list of ride requests available for acceptance.

2.  **Accept Ride**

    - Accept a ride request from a customer.

3.  **Decline Ride**

    - Decline a ride request if unable to fulfill.

4.  **Complete Ride**

    - Mark a ride as completed and send an alert to the restaurant owner and customer.

5.  **View My Completed Rides**

    - Access a list of all completed rides I've conducted.

#### Restaurant Owner (RO)

As a **restaurant owner**, I can:

1.  **Add Restaurant**

    - Create a new restaurant listing on the platform.

2.  **Add Meal**

    - Add new meal options to my restaurant's menu.

3.  **View My Orders**

    - Access a list of orders placed from my restaurant.

4.  **Request Ride**

    - Request a ride for meal delivery.

5.  **View Payments**

    - Review payment history for orders delivered from my restaurant.

#### Customer

As a **customer**, I can:

1.  **View Available Meals**

    - Browse through a list of meals available for order.

2.  **Make Order**

    - Place an order for selected meals, recording details such as meal selection, price, and delivery preferences.

3.  **Make Payment**

    - Complete payment for an order placed.

4.  **Cancel Order**

    - Cancel an order if necessary, updating the status accordingly.

5.  **Review Order**

    - Provide feedback and rating for an order received.

6.  **Review Rider**

    - Rate and provide feedback for the rider's service.

7.  **View Previous Orders**

    - Access a history of past orders placed.

8.  **Deposit to Wallet**

    - Add funds to the customer's wallet for easier and quicker payment processing.

Entities:

- **User**
- **Rider**
- **Owner**
- **Customer**
- **Meal**
- **Restaurant**
- **Review**
- **Payment**
- **Order**

Relationships:

- A **User** can be associated with one **Rider**, **Owner**, or **Customer**.
- A **Rider**, **Owner**, or **Customer** can have multiple **Reviews**.
- A **Customer** can place multiple **Orders** and make multiple **Payments**.
- An **Order** can consist of multiple **Meals**.
- A **Restaurant** can have multiple **Meals** and **Reviews**.
- A **Review** is associated with one **Rider**, **Restaurant**, and **Customer**.

## Technologies Used

### Frontend:

- [React.js](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [Axios](https://axios-http.com/)
- HTML/CSS/JavaScript

### Backend:

- [Flask](https://flask.palletsprojects.com/)
- [SQLAlchemy](https://www.sqlalchemy.org/)
- [Flask-Restful](https://flask-restful.readthedocs.io/)
- [bcrypt](https://pypi.org/project/bcrypt/)
- [Flask-CORS](https://flask-cors.readthedocs.io/)

## Contributing

If you'd like to contribute to the project, follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/improvement`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature/improvement`)
6. Create a new Pull Request

## License

This project is licensed under the [MIT License](LICENSE).
