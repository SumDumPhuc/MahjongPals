import React, { useRef } from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import './SignUp.css';

function SignIn() {
    const emailRef = useRef()
    const passwordRef = useRef()

    return (
    <>
    <Card>
        <Card.Body>
            <h2 className='text-center mb-4'>Sign In</h2>
            <Form>
                <Form.Group className='shift' id='email'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' ref={emailRef} required />
                </Form.Group>
                <Form.Group className='shift' id='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='email' ref={passwordRef} required />
                </Form.Group>
                <Button className='btn--signup' type='submit'>
                    Sign In
                </Button>
            </Form>
        </Card.Body>
    </Card>
    </>
  )
}

export default SignIn;