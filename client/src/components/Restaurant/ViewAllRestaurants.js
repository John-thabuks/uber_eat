import React, { useEffect, useState } from 'react'
import { Card, Button } from "react-bootstrap";
import './ViewAllRestaurants.css';

const ViewAllRestaurants = () => {

    const sampleImage = "https://rb.gy/9zqx22"

    const [resto, setResto] = useState([])

    useEffect(() => {
        fetch("http://127.0.0.1:5000/restaurants")
            .then(response => response.json())
            .then(data =>
                setResto(data)
                // console.log(data)
            )

    }, [])

    return (
        <>
            <h2>View All Restaurants</h2>
            <div className="container">
                {
                    resto && resto.map(resp => (
                        <div className="card">
                            <Card.Body className="card-body">
                                <Card.Img variant='top' src={sampleImage} style={{ width: "350px", marginBottom: "10px", borderRadius: "10px" }} />
                                <Card.Title className="card-title">Restaurant name: {resp["name"]}</Card.Title>
                                <Card.Text className="card-text">Restaurant location: {resp["location"]}</Card.Text>
                                <Button variant='primary' className="card-button">View</Button>
                            </Card.Body>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default ViewAllRestaurants
