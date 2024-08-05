import style from './features.module.css'
import './features.css'
const Features = () => {
    return (
        <div id={style.body}>
            <div className={style.features_txt}>
                <h2>Why HealthSync?</h2>
            </div>

            <h5>
                Enroll patients onto the patient-friendly app. Deliver rich content and insights and collect high-quality real-world data.
                <br />
                <br />
                Track your health
                <br />Custom dashboards that offer insights into the health of a study, patients managing a condition or a treatment being investigated.
            </h5>

            <div className={style.features_div}>
                <div className={style.features_content} id={style.feature1} style={{ borderTopLeftRadius: '50px', borderBottomLeftRadius: '50px' }}>

                </div>

                <div className={style.features_content} id={style.feature2}>

                </div>

                <div className={style.features_content} id={style.feature3} style={{ borderTopRightRadius: '50px', borderBottomRightRadius: '50px' }}>

                </div>
            </div>
        </div>
    );
};

export default Features;
