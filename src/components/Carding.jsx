import React, { Component , useRef , useEffect} from 'react'
import gsap from 'gsap'
import more from '../imgs/more.png';
import card from '../imgs/bankCard.png';
import up from '../imgs/up-arrow.png';
import down from '../imgs/download.png';
import next from '../imgs/next.png'
import '../styles/carding.scss';
class Carding extends Component {
        
    render() {
        

        return (
            <div className="carding-wrapper">


{/* DIV-1 === CARD */}

                <div className="card">
                    <ul className="ul-header">
                        <li><span>Your Card</span></li>
                        <li><img src={more} alt=""/></li>
                    </ul>
                    <div className="card-inner">
                        <img src={card} alt=""/>
                        <button>Open Card</button>
                    </div>
                </div>


{/* DIV-2 === HISTORY */}
                <div className="card-history">
                    {/* First Header */}
                    <ul className="ul-header">
                        <li><span>Your History</span></li>
                        <li><img src={more} alt=""/></li>
                    </ul>

                    <div className="history-lines">
                        <div className="history-line">
                            <div className="history-title-btn">
                                <button><img src={up} alt=""/></button>
                                <p>
                                $.250,00 
                                </p>

                                
                            </div>
                            <span>05/07/1997</span>

                        </div>
                        <div className="history-line ">
                            <div className="history-title-btn yellow-second-line">
                                <button><img src={down} alt=""/></button>
                                <p>$.212,00 </p>
                            </div>
                            <span>05/07/1997</span>

                        </div>
                        <div className="history-line">
                            <div className="history-title-btn">
                                <button><img src={up} alt=""/></button>
                                <p>
                                $.420,00
                                </p>
                            </div>
                            <span>05/07/1997</span>

                        </div>
                    </div>

                    <button className="view-all">View All</button>

                </div>

{/* DIV-3 === CHART HISTORY */}
                <div className="chart-history">
                    <ul className="ul-header">
                        <li><span>History Chart</span></li>
                        <li><img src={next} alt=""/></li>

                    </ul>

                    <div className="chart-bar">
                        <div className="first-fill"></div>
                        <div className="second-fill"></div>
                        <div className="third-fill"></div>
                    </div>

                    <ul className="types">
                        <li><button></button> Saving</li>
                        <li><button></button> Spending</li>
                        <li><button></button> Income</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Carding; 
