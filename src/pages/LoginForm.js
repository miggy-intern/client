import React from 'react';
import '../styles/LoginForm.css';
import { LuUser } from 'react-icons/lu';
import { RiLockPasswordLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const LoginForm = () => {
    return (
        <div className="wrapper">
            <form action="">
                <h1>Login</h1>

                <div className="input-box">
                    <LuUser className="icon"/>
                    <input type="text" placeholder="Email" required/>
                </div>

                <div className="input-box">
                    <RiLockPasswordLine className="icon"/>
                    <input type="password" placeholder="Password" required/>
                </div>

                <button type="submit">
                    Submit
                </button>

                <div className="forgot">
                    <Link to="/reset">Reset Password</Link>
                </div>
            </form>
        </div>
    );
}
export default LoginForm;
