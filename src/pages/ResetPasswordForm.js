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

        const response = await fetch('/api/reset-password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ newPassword, confirmPassword }),
        });

        if (response.ok) {
            alert("response is okay")
            navigate('/congratulations');
        } else {
            alert('response is not okay');
            navigate('/dissapointment');
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
