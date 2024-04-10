import React, { useState } from 'react';
import './AddMealForm.css';

const AddMealForm = ({ restaurantId }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            const userData = {
                "name": name,
                "price": price,
                "description": description,
                "image": image
            }
            fetch('http://127.0.0.1:5000/meals', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userData)
            })
                .then(response => response.json())
                .then(data => console.log(data))

            setName("")
            setPrice("")
            setDescription("")
            setImage("")

        } catch (error) {
            console.error('Error adding meal:', error);
        }
    };

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <label className="form-label">
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-input" name='name' required />
            </label>
            <label className="form-label">
                Price:
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} className="form-input" name='price' required />
            </label>
            <label className="form-label">
                Description:
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="form-textarea" name='description' required />
            </label>
            <label className="form-label">
                Image URL:
                <input type="text" value={image} onChange={(e) => setImage(e.target.value)} className="form-input" name='imageUrl' required />
            </label>
            <button type="submit" className="form-button">Add Meal</button>
        </form>
    );
};

export default AddMealForm;
