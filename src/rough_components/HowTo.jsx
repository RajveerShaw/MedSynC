import React from 'react';
import './HowTo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons';

function HowTo() {
    return (
        <div className="how-to-container">
            <h1 className="heading">How It Works</h1>
            <div className="steps">
                <div className="step step1">
                    <h2>
                        <FontAwesomeIcon icon={faFile} />
                        Step 1: Upload Prescription
                    </h2>
                    <p>
                        Upload your medical precription. Make sure the text and numbers are clear and visible for accurate processing.
                    </p>
                </div>
                <div className="step step2">
                    <h2>Step 2: OCR Processing</h2>
                    <p>
                        Our web app uses advanced OCR technology to scan the text on your prescription. This process extracts important details such as medication names, dosages, and patient information.
                    </p>
                </div>
                <div className="step step3">
                    <h2>Step 3: Data Input & Storage</h2>
                    <p>
                        The extracted information is securely stored in our database. You can access your medical details anytime, ensuring you have all necessary information at your fingertips.
                    </p>
                </div>
                <div className="step step4">
                    <h2>Step 4: Manage Prescriptions</h2>
                    <p>
                        Easily manage your prescriptions through the app. You can update details, set reminders for dosages, and track expiry dates to stay on top of your medication schedule.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default HowTo;
