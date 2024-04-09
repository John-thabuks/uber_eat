import React, { useState } from 'react';
import axios from 'axios';

const ReviewRider = ({ orderId, riderId }) => {
    const [comments, setComments] = useState('');
    const [rating, setRating] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await axios.post(`/customer/orders/${orderId}/reviews`, {
                comments,
                rating,
                riderId
            });
            console.log('Rider review submitted successfully:', response.data);
        } catch (error) {
            console.error('Error submitting rider review:', error.response.data);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div>
            <h2>Review Rider</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="comments">Comments:</label>
                    <textarea id="comments" value={comments} onChange={(e) => setComments(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="rating">Rating:</label>
                    <input type="number" id="rating" value={rating} min={0} max={5} onChange={(e) => setRating(e.target.value)} required />
                </div>
                <button type="submit" disabled={isSubmitting}>Submit Review</button>
            </form>
        </div>
    );
};

export default ReviewRider;
