import React, { useState } from 'react';
import axios from 'axios';

const AddRestaurantForm = () => {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('/restaurant', { name, location })
            .then(response => {
                console.log('Restaurant added:', response.data);

            })
            .catch(error => {
                console.error('Error adding restaurant:', error);
            });
    };

    return (
        <div>
            <h2>Add Restaurant</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <label>Location:</label>
                <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
                <button type="submit">Add Restaurant</button>
            </form>
        </div>
    );
};

export default AddRestaurantForm;
