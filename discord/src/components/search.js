

import "../css/search.css"
import { IoSearch } from "react-icons/io5";

export default function Search(){
    
    return(
        <div className="wrap">

            <div className="con">
            <div className="search">
            <input type="checkbox" className="check" id="check" />     
            <input type="text" className="cru" placeholder="Search" /> 
            <label htmlFor="check"> <div className="seachb"  >
                    <IoSearch className="c" />
                </div></label>
            </div> 
            </div>
        </div>
    );
}