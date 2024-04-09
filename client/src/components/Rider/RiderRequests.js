import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RideRequests = ({ baseURL }) => {
    const [rideRequests, setRideRequests] = useState([]);

    useEffect(() => {
        axios.get(`${baseURL}/rider/requests`)
            .then(response => {
                setRideRequests(response.data);
            })
            .catch(error => {
                console.error('Error fetching ride requests:', error);
            });
    }, [baseURL]);

    return (
        <div>
            <h2>Ride Requests</h2>
            <ul>
                {rideRequests && rideRequests.map(request => (
                    <li key={request.id}>{request.details}</li>
                ))}
            </ul>
        </div>
    );
};

export default RideRequests;
