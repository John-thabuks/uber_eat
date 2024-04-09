import React from 'react';
import './Home.css';

const Home = () => {

    const restaurants = [
        {
            id: 1,
            name: "Delicious Bites",
            cuisine: "Italian",
            // image: "https://via.placeholder.com/150",
            image: "https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=600,height=400,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/7f63bd9a-ad5b-4766-9925-88a288471499.jpg",
            rating: 4.5,
            deliveryTime: 30
        },
        {
            id: 2,
            name: "Tasty Treats",
            cuisine: "Mexican",
            image: "https://i.ytimg.com/vi/TUV9h2eFU_8/maxresdefault.jpg",
            rating: 4.3,
            deliveryTime: 45
        },
        {
            id: 3,
            name: "Sizzling Spices",
            cuisine: "Indian",
            // image: "https://via.placeholder.com/150",
            image: "https://d1ralsognjng37.cloudfront.net/7e930c41-de0e-4fe6-ac72-e2a979bdf06c",
            rating: 4.8,
            deliveryTime: 25
        },
        {
            id: 4,
            name: "Savory Sushi",
            cuisine: "Japanese",
            // image: "https://via.placeholder.com/150",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSteqsiJwcS29dQm58xqeqawn_DDVq_v0LbI-Q8pg3rTg&s",
            rating: 4.7,
            deliveryTime: 35
        },
        {
            id: 5,
            name: "Tantalizing Tacos",
            cuisine: "Mexican",
            // image: "https://via.placeholder.com/150",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGuTEYqxTkXYukuplvJFBLr8SFDCXCnMxW9ZI8Cy-oMA&s",
            rating: 4.2,
            deliveryTime: 40
        },
        {
            id: 6,
            name: "Crispy Crust Pizza",
            cuisine: "Italian",
            // image: "https://via.placeholder.com/150",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW1nESYCqySxtk92a__28R2fgY0xTqXLIigRroQe56fg&s",
            rating: 4.6,
            deliveryTime: 30
        },
        {
            id: 7,
            name: "Hearty Burgers",
            cuisine: "American",
            // image: "https://via.placeholder.com/150",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStOMvON3JmlpFiqcpf35_lll9MZffxgbrdZ0kxkTDTuQ&s",
            rating: 4.4,
            deliveryTime: 35
        },
        {
            id: 8,
            name: "Sweet Treats Bakery",
            cuisine: "Desserts",
            // image: "https://via.placeholder.com/150",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0uAyXit6tU2eA5VFMjkBeIgJwP9Q2XVvBgzcu3bEh6A&s",
            rating: 4.9,
            deliveryTime: 20
        }
    ];

    return (
        <div className="home-container">
            <div className="home-banner">
                <h1>Discover great restaurants nearby</h1>
                <p>Order delicious meals and get them delivered to your doorstep</p>
            </div>
            <div className="restaurant-list">
                <h2>Popular Restaurants</h2>
                <div className="restaurant-cards">
                    {restaurants.map(restaurant => (
                        <div key={restaurant.id} className="restaurant-card">
                            <img src={restaurant.image} alt={restaurant.name} />
                            <div className="restaurant-details">
                                <h3>{restaurant.name}</h3>
                                <p>Cuisine: {restaurant.cuisine}</p>
                                <p>Rating: {restaurant.rating}/5</p>
                                <p>Delivery Time: {restaurant.deliveryTime} mins</p>
                                <button>Order Now</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
