import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CompletedRides = () => {
    const [completedRides, setCompletedRides] = useState([]);

    useEffect(() => {
        axios.get('########')
            .then(response => {
                setCompletedRides(response.data);
            })
            .catch(error => {
                console.error('Error fetching completed rides:', error);
            });
    }, []);

    return (
        <div>
            <h2>Completed Rides</h2>
            <ul>
                {completedRides.map(ride => (
                    <li key={ride.id}>{ride.details}</li>
                ))}
            </ul>
        </div>
    );
};

export default CompletedRides;
