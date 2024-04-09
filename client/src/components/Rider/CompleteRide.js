import React from 'react';
import axios from 'axios';

const CompleteRide = ({ orderId }) => {
    const completeRide = () => {
        axios.post(`/rider/requests/${orderId}/complete`)
            .then(response => {
                console.log('Ride completed:', response.data);
            })
            .catch(error => {
                console.error('Error completing ride:', error);
            });
    };

    return (
        <button onClick={completeRide}>Complete Ride</button>
    );
};

export default CompleteRide;
