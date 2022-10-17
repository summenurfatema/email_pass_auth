import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import app from '../firebase/firebase.init';

const auth = getAuth(app)

const RegisterReactBootstrap = () => {

    // target full form
    const handleSubmit = (event) => {
        const email = event.target.email.value
        const password = event.target.password.value
        event.preventDefault()
        //console.log(email, password)
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                // Signed in 
                const user = result.user;
                console.log(user)

            })
            .catch((error) => {

                console.log('error', error)
            });
    }

    return (
        <div className='w-50 mx-auto'>
            <h1 className='text-primary'>Please Register !!!</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default RegisterReactBootstrap;