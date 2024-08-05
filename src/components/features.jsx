import React from 'react';
import './features.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCirclePlus, faBriefcaseMedical, faGlassWaterDroplet } from '@fortawesome/free-solid-svg-icons';

const Features = () => {
    return (
        <div>
            <div className="features-txt">
                <h2>Why HealthSync?</h2>
            </div>

            <h5>
                Enroll patients onto the patient-friendly app. Deliver rich content and insights and collect high-quality real-world data.
                <br />
                <br />
                Track your health
                <br />Custom dashboards that offer insights into the health of a study, patients managing a condition or a treatment being investigated.
            </h5>

            <div className="features-div">
                <div className="features-content" id="feature1" style={{ borderTopLeftRadius: '50px', borderBottomLeftRadius: '50px' }}>
                    <FontAwesomeIcon icon={faFileCirclePlus} />
                </div>

                <div className="features-content" id="feature2">
                    <FontAwesomeIcon icon={faBriefcaseMedical} className="fb-icon-element-2 fb-icon-element fontawesome-icon fas circle-no" />
                </div>

                <div className="features-content" id="feature3" style={{ borderTopRightRadius: '50px', borderBottomRightRadius: '50px' }}>
                    <FontAwesomeIcon icon={faGlassWaterDroplet} />
                </div>
            </div>
        </div>
    );
};

export default Features;
