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
