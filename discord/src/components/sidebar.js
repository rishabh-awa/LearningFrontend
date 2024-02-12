import "../css/sidebar.css"
import {IoIosMenu,IoIosClose} from "react-icons/io"


export default function Sidebar(){
    return(
        <div className="fold">
            <input type="checkbox" className="check" id="check"/>
            <label htmlFor="check" className="gate">
                <IoIosMenu className="gate"/>
                </label>
                <label htmlFor="check" className="hot">
            <div className="hot">
            <div className="sidebar">
                <div className="head"><>Content</>
                <div className="close"><label htmlFor="check"><IoIosClose className="clos"/></label></div>
                </div>

                <hr className="g" />
                <div className="body">
                    <div className="id 1">Profile</div>
          
                    <div className="id 1">Update</div>
                 
                    <div className="id 1">Settings</div>
                  
                    <div className="id 1">About US</div>
                  
                </div>
            </div>
            </div></label>
        </div>
    );
}