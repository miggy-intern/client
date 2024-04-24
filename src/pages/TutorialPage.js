import React from "react";
import '../styles/TutorialPage.css';
import { LuUser } from "react-icons/lu";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const TutorialPage = () => {
    return (
        <div>
            <header className="nav">
                <ul>
                    <h1 className="headerText">Web Download Help</h1>
                </ul>
            </header>
            <div className="diss-container">
                <h1 className="BoldText">What is H5?</h1>
                <p className="NormalText">
                    H5 is a collection of technologies for creating interactive effects on web pages, meaning H5 refers to web pages for mobile devices.
                    H5 games are a type of game that can be played instantly, loaded in the browser without needing to download or install anything.
                    Logging into the H5 version of GoPlay360 means it doesn't take up storage space, and you can play together with players on both iOS and Android phones.
                </p>

                <h1 className="BoldText">Add the GoPlay360 H5 (web app) to your mobile home screen</h1>
                <p className="NormalText">
                    1. Open the GoPlay360 website in your mobile browser (use Safari for iPhone):
                </p>

                <p className="NormalText">
                    <a href="https://h5.laiwanpai.com/" target="_blank" rel="noopener noreferrer">
                        https://h5.laiwanpai.com/
                    </a>
                </p>

                <div className="image-placeholder">
                    <p>Goplay360 Website</p>
                </div>

                <p className="NormalText">
                    2. Click on the share icon at the bottom of the page.
                </p>

                <div className="image-placeholder">
                    <p>Show Share Icon</p>
                </div>


                <p className="NormalText">
                    3. Scroll down the page and click 'Add to Home Screen'.
                </p>

                <div className="image-placeholder">
                    <p>Button of 'Add to Home Screen'</p>
                </div>

                <p className="NormalText">
                    4. Confirm 'Add'.
                </p>

                <div className="image-placeholder">
                    <p>Confirm Add</p>
                </div>

                <p className="NormalText">
                    5. You can now see the GoPlay360 icon on your mobile home screen.
                </p>

                <div className="image-placeholder">
                    <p>Output of Step 5</p>
                </div>

            </div>
        </div>
    );
}

export default TutorialPage;
