import "../css/card.css"
import logo from  "../static/icon.jpg"
import { IconContext } from "react-icons";
import {FaTwitter, FaInstagram,FaYoutube,FaHeart,FaComment,FaShare} from 'react-icons/fa'

export default function Card({dat}){
    return(
        <div className="container">
        <div className="upper-half">
          <div className="image">
            <img src={logo} alt="mypic"/>
          </div>
        </div>
        <div className="lower-half">
          <div className="desc">
            <h2>Rishabh Awasthi</h2>
            <h4>This is FUN!!! LESSGOOOO!!!</h4>
          </div>
          <div className="icons">
            <ul>
            <IconContext.Provider value={{size:"30px",color:"#0096FF",className:"global-class-name"}}  >
            <li className="tt"><FaTwitter/></li>
            </IconContext.Provider>
            <IconContext.Provider value={{size:"30px",color:"#d62976",className:"global-class-name"}}  >
            <li className="ig"><FaInstagram/></li>
            </IconContext.Provider>
            <IconContext.Provider value={{size:"30px",color:"#FF0000",className:"global-class-name"}}  >
            <li className="yt"><FaYoutube/></li>
            </IconContext.Provider>
            </ul>
          </div>
          <div className="links">
            <button>Subscribe</button>
            <button>Message</button>
          </div>
          <div className="likes">
            <div ><FaHeart/></div><div>|</div><div><FaComment/></div><div>|</div><div><FaShare/></div>
          </div>
        </div>
       </div>
    );
}