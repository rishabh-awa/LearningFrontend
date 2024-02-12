import "../css/flipcard.css"
import sim from "../static/card.webp"



export default function Flipcard(){
    return(
        <div className="page-bg">
            <div className="ball a">
            </div>
            <div className="ball b">
            </div>
            <div className="card">
                <div className="cardinner">
                <div className="content front">
                    <div className="head">
                        <div className="title">
                            <div className="logo">
                                <div className="ba r"></div>
                                <div className="ba y"></div>
                            </div>
                            <h3 className="bank">Master Card</h3>
                        </div>
                        <div className="img">
                        <img src={sim} alt="hey"/></div>
                    </div>
                    <div className="bodycard">
                        <div className="cardnum">
                            <h5>Card Number</h5>
                            <h2 className="pim">8050 5040 2030 3020</h2>
                        </div>
                        <div className="user">
                            <h3>Rishabh Awasthi</h3>
                            <div className="date">
                                <h5>Valid till</h5>
                                <h3>05/28</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content-back">
                 Thank you
                </div></div>
            </div>
        </div>
    );
}