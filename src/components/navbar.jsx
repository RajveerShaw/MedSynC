import style from "./navbar.module.css"
import { FaUserAlt } from "react-icons/fa";
function Navbar(){
    return(<>
    <div className={style.navbar}>
        <div className={style.logo}></div>
        <div className={style.about_us}><p>About Us</p></div>
        <div className={style.contact_us}><p>Contact Us</p></div>
        <div className={style.features}><p>Features</p></div>
        <div className={style.user}><FaUserAlt /></div>
        <div className={style.login_signup}><p>Login/SignUp</p></div>
    </div>
    </>)
}

export default Navbar;