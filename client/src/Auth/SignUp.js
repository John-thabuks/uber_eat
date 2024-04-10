import React from 'react'

const SignUp = () => {
    return (
        <>
            {/* <h1>Karibu, SignUp Here</h1> */}
            <Container>
                <Row>
                    <Col>
                        <img src={'https://res.cloudinary.com/dcyyiwsq4/image/upload/v1712735262/Sign-Up-removebg-preview_zrlirh.png'} alt='food delivery guy' />

                    </Col>
                    <Col>

                        <Form style={{ marginTop: '10%' }} onSubmit={handleSubmit}>
                            <h4 style={{ marginBottom: '5%' }}>Sign Up Here</h4>
                            <Form.Group style={{ marginBottom: '5%' }}>
                                {/* <Form.Label>Enter your full name:</Form.Label>  */}
                                <Form.Control type="text"
                                    placeholder="Enter your full name" onChange={(e) => setUserName(e.target.value)} value={userName} name="userName" />
                            </Form.Group>
                            <Form.Group style={{ marginBottom: '5%' }}>
                                {/* <Form.Label>Enter your email address:</Form.Label>  */}
                                <Form.Control type="text"
                                    placeholder="Enter your your email address" onChange={(e) => setUserEmail(e.target.value)} value={userEmail} name="userEmail" />
                            </Form.Group>
                            <Form.Group style={{ marginBottom: '5%' }}>
                                {/* <Form.Label>Enter your age:</Form.Label>  */}
                                <Form.Control type="password" placeholder="Enter Your Password" onChange={(e) => setPassword(e.target.value)} value={password} name="password" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Sign Up
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default SignUp

// component RideRequest 
// View all restaurants
