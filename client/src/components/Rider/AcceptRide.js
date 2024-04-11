import React, { useEffect, useState } from 'react';


const AcceptRide = ({ orderId }) => {

    const [order, setOrder] = useState([])
    const [price, setPrice] = useState(0)
    const [customerId, setCustomerId] = useState(null)
    const [rideId, setRideId] = useState(null)

    oderDetails = {
        "price": price,
        "ride_id": rideId,
        "customer_id": customerId
    }


    useEffect(() => {
        fetch(`http://127.0.0.1:5000/rider/requests/${orderId}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(oderDetails)
        })
    }, [])
    return (

        <button onClick={acceptRide}>Accept Ride</button>
    );
};

export default AcceptRide;
