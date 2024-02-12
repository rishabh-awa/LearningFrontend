
import "../css/contact.css"
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaMessage } from "react-icons/fa6";

export default function Contact(){
    return(
        <div className="wrapper">
        <div className="con">
            <div className="links">
                <div className="ch">
                <FaLocationDot className="icon" />
                <h3>Address</h3>
                <h4>Surket, NP12</h4>
                <h4>Shyam Nagar,06</h4>
                </div>
                <div className="ch">
                <FaPhone className="icon" />
                <h3>Phone</h3>
                <h4>+0025 5468 8454</h4>
                <h4>+0098 5421 5426</h4>                    
                </div>
                <div className="ch">
                <FaMessage className="icon" />    
                <h3>Email</h3>
                <h4>awasami@gmail.com</h4>
                <h4>learnercss@gmail.com</h4>                    
                </div>
            </div>
            <hr/>
            <form>
                <h2>Send us a message</h2>
                <h4>If you have any work from me or any types of queries related to my tutorial, you can send me message from here.It's my pleasure to help you.</h4>
                <input type="text" placeholder="Enter your name" />
                <input type="text" placeholder="Enter your email" />
                <textarea className="desc" placeholder="Enter your message" rows="5" />
                <button>Send Now</button> 
            </form> 
        </div></div>
    );

}