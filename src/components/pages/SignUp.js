import React, { useState } from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import './SignUp.css';
import {Link} from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';


const SignUp = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {console.log(userCredential)}).catch((error) => {
            console.log(error);
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
        </Card.Body>
    </Card>
    <div className='w-100 text-center mt-2'>
        Already have an account? <Link to='/sign-in'>Sign In</Link>
    </div>
    </>
  )
}

export default SignUp;