import React, { useEffect, useState, useContext } from 'react'
import { Card, Button } from "react-bootstrap";
import './ViewAllRestaurants.css';
import { myAuthContext } from "./../../AuthContxt"


const ViewAllRestaurants = () => {

    const sampleImage = "https://rb.gy/9zqx22"

    const [resto, setResto] = useState([])
    const [errorMessage, setErrorMessage] = useState("")

    const { token } = useContext(myAuthContext)



    useEffect(() => {
        fetch("http://127.0.0.1:5000/restaurants", {
            method: "GET",
            headers: {
                "jwttoken": token
            }

        })
            .then(response => response.json())
            .then(data => {
                if (data["ERROR"]) {
                    setErrorMessage(data["ERROR"])
                }
                else {

                    setResto(data)
                }
                console.log(data)
            }
            )

    }, [])
    const resto_display = resto.map(resp => (
        <div className="card">
            <Card.Body className="card-body">
                <Card.Img variant='top' src={sampleImage} style={{ width: "350px", marginBottom: "10px", borderRadius: "10px" }} />
                <Card.Title className="card-title">Restaurant name: {resp["name"]}</Card.Title>
                <Card.Text className="card-text">Restaurant location: {resp["location"]}</Card.Text>
                <Button variant='primary' className="card-button">View</Button>
            </Card.Body>
        </div>
    ))
    return (
        <>
            <h2>View All Restaurants</h2>
            <div className="container">
                {

                    resto.length > 0 ? resto_display : errorMessage
                }
            </div>
        </>
    )
}

export default ViewAllRestaurants
