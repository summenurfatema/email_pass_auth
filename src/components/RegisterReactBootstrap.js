import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import app from '../firebase/firebase.init';
import { useState } from 'react';

const auth = getAuth(app)

const RegisterReactBootstrap = () => {

    // custum password step1
    const [passError, setPassError] = useState('')

    // login success status

    const [success, setSuccess] = useState(false)

    // target full form
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value

        // custum password step2
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setPassError('Please enter two capital letter')
            return;
        }
        if (password.length < 6) {
            setPassError('Password should be at least 6 characters')
        }
        if (!/(?=.*[@#$%&!])/.test(password)) {
            setPassError('Please enter at least one special character')
            return;
        }
        setPassError('')



        setSuccess(false)
        //console.log(email, password)
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                // Signed in 
                const user = result.user;
                setSuccess(true)
                form.reset('')
                console.log(user)

            })
            .catch((error) => {

                console.log('error', error)
                setPassError(error)
            });
    }

    return (
        <div className='w-50 mx-auto'>
            <h1 className='text-primary'>Please Register !!!</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <p className='text-danger'>{passError}</p>
                {success && <p className='text-success'>Login successfully</p>}
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default RegisterReactBootstrap;