import React, { useState } from 'react';
import './SignForm.css';
import { FaUser } from 'react-icons/fa';
import { MdPassword , MdEmail , MdDriveFileRenameOutline  } from 'react-icons/md';
import videoBg2 from '../Assets/sign.mp4';
import axios from "axios"

const SignForm = () => {

    return (
        <div className="main">
        <video src={videoBg2} autoPlay loop muted className="video-bg" />
    
        <div className="wrapper">
            <form action="">
            <h1>Sign Up</h1>
            <div className="input-box">
                <input type="text" placeholder="First name" required />
                <FaUser className="icon" />
            </div>
    
            <div className="input-box">
                <input type="text" placeholder="Last name" required />
                <MdDriveFileRenameOutline className="icon" />
            </div>

            <div className="input-box">
                <input type="email" placeholder="Email" required />
                <MdEmail className="icon" />
            </div>

            <div className="input-box">
                <input type="password" placeholder="Password" required />
                <MdPassword className="icon" />
            </div>
    
    
            <button type="submit">Register</button>
            
            </form>
        </div>
        </div>
    );
}

export default SignForm