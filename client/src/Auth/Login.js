import React, { useState } from 'react'
import { Container, Row, Form, Button, Col } from "react-bootstrap"
import AddMealForm from "./../components/Meal/AddMealForm"




const Login = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        const formdata = {
            "name": name,
            "email": email,
            "password": password
        }
        fetch("http://127.0.0.1:5000/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formdata)
        })
            .then(resp => resp.json())
            .then(body => console.log(body))
        console.log("Submit")
    }

    return (
        <>
            {/* <h1>Karibu, SignUp Here</h1> */}
            <Container>
                <Row>
                    <Col>
                        <img src={'https://res.cloudinary.com/dcyyiwsq4/image/upload/v1712732868/signupImage_cu7ynw.png'} alt='food delivery guy' />

                    </Col>
                    <Col>

                        <Form style={{ marginTop: '10%' }} onSubmit={handleSubmit}>
                            <h4 style={{ marginBottom: '5%' }}>Log In Here</h4>
                            <Form.Group style={{ marginBottom: '5%' }}>
                                {/* <Form.Label>Enter your full name:</Form.Label>  */}
                                <Form.Control type="text"
                                    placeholder="Enter your full name" onChange={(e) => setName(e.target.value)} value={name} name="name" />
                            </Form.Group>
                            <Form.Group style={{ marginBottom: '5%' }}>
                                {/* <Form.Label>Enter your email address:</Form.Label>  */}
                                <Form.Control type="text"
                                    placeholder="Enter your your email address" onChange={(e) => setEmail(e.target.value)} value={email} name='email' />
                            </Form.Group>
                            <Form.Group style={{ marginBottom: '5%' }}>
                                {/* <Form.Label>Enter your age:</Form.Label>  */}
                                <Form.Control type="password" placeholder="Enter Your Password" onChange={(e) => setPassword(e.target.value)} value={password} name='password' />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Sign Up
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <AddMealForm />

        </>
    )
}

export default Login