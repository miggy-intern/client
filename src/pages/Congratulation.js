import React from 'react';
import '../styles/Congratulation.css';

const Congratulation = () => {
    return (
        <div className="congratulations-container">
            <h1 className="congratulations-title">🎉 Congratulations! 🎉</h1>
            <p className="congratulations-message">
                You've successfully completed the process! We're so proud of you! 🥳
            </p>
            <p className="congratulations-wishes">
                Keep shining and continue on your amazing journey! 🌟
            </p>
            <img src="/images/confetti.png" alt="Confetti" className="congratulations-image" />

        </div>
    );
};

export default Congratulation;
