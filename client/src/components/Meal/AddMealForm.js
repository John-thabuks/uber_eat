import React, { useState } from 'react';
import axios from 'axios';

const AddMealForm = ({ restaurantId }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/meals', {
                name,
                price,
                description,
                image,
                resto_id: restaurantId
            });
            console.log('Meal added successfully:', response.data);
        } catch (error) {
            console.error('Error adding meal:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </label>
            <label>
                Price:
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
            </label>
            <label>
                Description:
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
            </label>
            <label>
                Image URL:
                <input type="text" value={image} onChange={(e) => setImage(e.target.value)} required />
            </label>
            <button type="submit">Add Meal</button>
        </form>
    );
};

export default AddMealForm;
