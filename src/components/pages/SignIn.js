import React, { useState } from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import './SignUp.css';
import { auth } from '../../Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import AuthDetails from '../AuthDetails';

const SignIn = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState()

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {console.log(userCredential)}).catch((error) => {
            console.log(error);
        });
    };

    return (
    <>
    <Card>
        <Card.Body>
            <h2 className='text-center mb-4'>Sign In</h2>
            <Form onSubmit={signIn}>
                <Form.Group className='shift' id='email'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' onChange={(e) => setEmail(e.target.value)}/>
                </Form.Group>
                <Form.Group className='shift' id='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' onChange={(e) => setPassword(e.target.value)}/>
                </Form.Group>
                <Button className='btn--signup' type='submit'>
                    Sign In
                </Button>
            </Form>
        </Card.Body>
    </Card>
    <AuthDetails />
    </>
  )
}

export default SignIn;