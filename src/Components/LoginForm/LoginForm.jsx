import React, { useState } from 'react';
import './LoginForm.css';
import { FaUser } from 'react-icons/fa';
import { MdPassword } from 'react-icons/md';
import videoBg from '../Assets/videoBg.mp4';
import { Link } from 'react-router-dom';
import axios from "axios"
const LoginForm = () => {
return (
    <div className="main">
    <video src={videoBg} autoPlay loop muted className="video-bg" />

    <div className="wrapper">
        <form action="">
        <h1>Login</h1>
        <div className="input-box">
            <input type="email" placeholder="Enter your email" required />
            <FaUser className="icon" />
        </div>

        <div className="input-box">
            <input type="password" placeholder="Enter your password" required />
            <MdPassword className="icon" />
        </div>

        <div className="remember-forget">
            <label>
            <input type="checkbox" />Remember me?
            </label>
            <a href="#">Forgot password?</a>
        </div>

        <button type="submit">Login</button>

        <div className="register-link">
            <p>
            Don't have an account yet? <Link to="/register">Register</Link>
            </p>
        </div>
        </form>
    </div>
    </div>
);
};

export default LoginForm;
