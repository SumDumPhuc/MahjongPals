import React, { useState } from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import './SignUp.css';
import {Link} from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../../Firebase';
import AuthDetails from '../AuthDetails';

const SignUp = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            setSuccessMessage('Successfully signed up!');
        }).catch((error) => {
            setError(error.message);
        });
    };


    return (
    <>
    <Card>
        <Card.Body>
            <h2 className='text-center mb-4'>Sign Up</h2>
            <Form onSubmit={signUp}>
                <Form.Group className='shift' id='email'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group className='shift' id='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Button className='btn--signup' type='submit'>
                    Sign Up
                </Button>
            </Form>
            {error && <p className="error-message">{error}</p>}
            {successMessage && <p className="success-message">{successMessage}</p>}
        </Card.Body>
    </Card>
    <div className='w-100 text-center mt-2'>
        Already have an account? <Link to='/sign-in'>Sign In</Link>
    </div>
    <AuthDetails />
    </>
  )
}

export default SignUp;
