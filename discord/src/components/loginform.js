import "../css/login.css"
import {FaUnlock , FaUser} from "react-icons/fa";



export default function Login(){
    return(
        <div className="Container">
            <div className="heading">
                <h1>Login Form</h1>
            </div>
            <div className="body">
                <label><FaUser className="icon"/><input type="text" placeholder="Email or Username" /></label>
                <label><FaUnlock className="icon"/><input type="password" placeholder="Password" /></label>
                <h3 className="green f">Forgot password?</h3>
                <button>Login</button>
                <div className="last"><h3>Not a member? </h3> <h3 className="green"> Sigup Now</h3></div>
            </div>
        </div>
    );
}