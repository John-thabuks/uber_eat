import React from 'react';
import axios from 'axios';

const AcceptRide = ({ orderId }) => {
    const acceptRide = () => {
        axios.post(`/rider/requests/${orderId}`)
            .then(response => {
                console.log('Ride accepted:', response.data);
            })
            .catch(error => {
                console.error('Error accepting ride:', error);
            });
    };

    return (
        <button onClick={acceptRide}>Accept Ride</button>
    );
};

export default AcceptRide;
