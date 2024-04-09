import React from 'react';
import axios from 'axios';

const DeclineRide = ({ orderId }) => {
    const declineRide = () => {
        axios.post(`/rider/requests/${orderId}/decline`)
            .then(response => {
                console.log('Ride declined:', response.data);
            })
            .catch(error => {
                console.error('Error declining ride:', error);
            });
    };

    return (
        <button onClick={declineRide}>Decline Ride</button>
    );
};

export default DeclineRide;
