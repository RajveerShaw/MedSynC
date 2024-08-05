import style from "./section1.module.css"
import "./section1.css"
function Section1() {
    return (<>
        <div className={style.container}>
            <div className={style.images}></div>
            <div className={style.left}>
                <div className={style.info}>Track Your Medical History</div>
                <div className={style.lower}><button className={`${style.get_started} grow_skew_forward`}>GET STARTED</button></div>
            </div>
        </div>
    </>)
}

export default Section1;