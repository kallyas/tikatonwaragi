import React from 'react';
import Navbar from '../components/Navbar'
import SignUpForm from '../components/signInForm';

function SignIn() {
    return (
        <div>
            <Navbar/>
            <h1>Sign In</h1>
            <SignUpForm/>
        </div>
    )
}

export default SignIn;