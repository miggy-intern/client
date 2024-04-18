import React from "react";
import '../styles/LoginForm.css';
import { useNavigate } from 'react-router-dom';
import { LuUser } from "react-icons/lu";
import { RiLockPasswordLine } from "react-icons/ri";

const ResetPasswordForm = () => {
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const newPassword = formData.get('newPassword');
        const confirmPassword = formData.get('confirmPassword');
        const res = {
            ok: false,
            message: ''
        };

        if (newPassword === confirmPassword) {
            res.ok = true;
            res.message = "Passwords match.";
        } else {
            res.ok = false;
            res.message = "Passwords do not match.";
        }
        if (res.ok) {
            alert(res.message);
            window.location.href = 'https://play.google.com/store/apps/details?id=com.ac.laiwan&hl=en&gl=US&pli=1';
        } else {
            alert(res.message);
        }
    };

    return (
        <div className="wrapper">
            <form onSubmit={handleSubmit}>
                <h1>Reset Password</h1>

                <div className="input-box">
                    <LuUser className="icon" />
                    <input
                        type="text"
                        placeholder="Email"
                        required
                        name="email"
                        value="123@gmail.com"
                        readOnly 
                    />
                </div>

                <div className="input-box">
                    <RiLockPasswordLine className="icon" />
                    <input
                        type="password"
                        placeholder="New Password"
                        required
                        name="newPassword"
                    />
                </div>

                <div className="input-box">
                    <RiLockPasswordLine className="icon" />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        required
                        name="confirmPassword"
                    />
                </div>

                <button type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ResetPasswordForm;
