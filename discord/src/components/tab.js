
import { useState } from "react";
import "../css/tab.css"
import { FaHome } from "react-icons/fa";
import { FaBloggerB } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";

export default function Tab({data}){
    const [index,setindex] = useState(0);
    return(
        <div className="conn">
            <div className="wrap">
            <h2>CSS Vertical Tabs</h2>
            <div className="com">
                <div className="tab"> 
                    <input type="radio" name="rad" id="one" defaultChecked />
                    <input type="radio" name="rad" id="two"/>
                    <input type="radio" name="rad" id="three"/>
                    <input type="radio" name="rad" id="fo"/>
                    <input type="radio" name="rad" id="fi"/>
                    <label className="home" htmlFor ="one" onClick={()=>setindex(0)}>
                       <FaHome className="icon"/> Home 
                    </label>
                    <label className="blog" htmlFor ="two" onClick={()=>setindex(1)}>
                    <FaBloggerB className="icon"/>  Blog
                    </label>
                    <label className="help" htmlFor ="three" onClick={()=>setindex(2)}>
                    <FaRegEnvelope className="icon"/> Help
                    </label>
                    <label className="code" htmlFor ="fo" onClick={()=>setindex(3)}>
                    <FaCode className="icon"/>  Code
                    </label>
                    <label className="about" htmlFor ="fi" onClick={()=>setindex(4)}>
                    <FaRegUser className="icon"/> About
                    </label>
                </div>
                <div className="content">
                        <div className="comi" key={index} id={index}>   
                            <h3>{data[index].heading}</h3>
                            <p>{data[index].Content}</p>
                        </div>   
                </div>
            </div></div>
        </div>
    );
}