import React, { useState, useEffect } from 'react';
import { Card, Button } from "react-bootstrap";
import './RideRequests.css';

const RideRequests = () => {
    const [rideRequests, setRideRequests] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:5000/rider/requests")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setRideRequests(data);
            });
    }, []);

    return (
        <>
            <h2>Ride Requests</h2>
            <div className="container">
                {
                    rideRequests && rideRequests.map(request => (
                        request["status"] === "requested" ? (
                            <div className="card" key={request["id"]}>
                                <Card.Body className="card-body">
                                    <Card.Title className="card-title">Customer name: {request["customer"]["user"]["name"]}</Card.Title>
                                    <Card.Title className="card-title">Customer address: {request["customer"]["address"]}</Card.Title>
                                    <Card.Title className="card-title">Request status: {request["status"]}</Card.Title>
                                    <Button variant='primary' className="card-button"> View </Button>
                                </Card.Body>
                            </div>
                        ) : null
                    ))
                }
            </div>
        </>
    );
};

export default RideRequests;
