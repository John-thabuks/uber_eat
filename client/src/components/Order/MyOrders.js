import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyOrders = ({ restaurantId }) => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get(`/restaurant/${restaurantId}/orders`);
                setOrders(response.data);
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        };

        fetchOrders();
    }, [restaurantId]);

    const requestRide = async (orderId) => {
        try {
            const response = await axios.post(`/customer/orders/${orderId}/request_ride`);
            console.log('Ride request successful:', response.data);
        } catch (error) {
            console.error('Error requesting ride:', error.response.data);
        }
    };

    return (
        <div>
            <h2>My Orders</h2>
            {orders.length === 0 ? (
                <p>No orders available</p>
            ) : (
                <ul>
                    {orders.map(order => (
                        <li key={order.id}>
                            Order ID: {order.id} - Price: ${order.price}
                            <button onClick={() => requestRide(order.id)}>Request Ride for Delivery</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default MyOrders;
