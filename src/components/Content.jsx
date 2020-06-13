import React, { Component } from 'react'
import '../styles/content.scss'; 
import profile from '../imgs/person.png'; 
import notif from '../imgs/notification.png'; 
import plus from '../imgs/plus.png'; 
import down from '../imgs/download.png';
import next from '../imgs/next.png'
import more from '../imgs/more.png'
import rect from '../imgs/rect.png'
import cone from '../imgs/cone.png'
import cube from '../imgs/cube.png'
export class Content extends Component {
    render() {
        return (
            <div className="content">
{/* 1 = HEADER */}
                <div className="header">
                    <span>Your Wallet</span>
                    <ul className="content-list">
                        <li><img src={notif} alt=""/></li>
                        <li><img src={profile} alt=""/></li>
                        <li>Mehdi D.Ettalab</li>
                    </ul>
                </div>
{/* 2 = CARDs */}
                <div className="cards">
                    <div className="vertical-line"></div>                    
                    <div className="card1">
                        <div className="leftDiv">
                            <div className="card1-inner">
                                <button></button>
                                <span>Income</span>
                                <div>$2,460.23</div>
                            </div>
                            <button><img src={plus} alt="" /> Top up</button>
                        </div>
                        <div className="rightDiv">
                            <div className="card1-inner">
                                <button></button>
                                <span>Spending</span>
                                <div>$1,450.59</div>
                            </div>
                            <p>Limit this year $5000</p>
                        </div>
                    </div>
                    <div className="card2">
                    <ul className="ul-header">
                        <li><span>Your Income</span></li>
                        <li><img src={more} alt=""/></li>

                    </ul>
                    </div>
                    <div className="card3">
                    <ul className="ul-header">
                        <li><span>Income Target Details</span></li>
                        <li><img src={more} alt=""/></li>

                    </ul>
                    </div>
                </div>

{/* 3 = SAVINGs */}
                <div className="savings">
                    <span>Your Savings</span>

                    <div className="s-cells">
                        <div className="saving1">
                            <img src={cube} alt=""/>
                            <div className="text-saving">
                                <h4>$.240S,39</h4>
                                <span>Saving for home</span>
                            </div>
                        </div>
                        <div className="saving2">

                            <img src={cone} alt=""/>
                            <div className="text-saving">
                                <h4>$.240S,39</h4>
                                <span>Saving for home</span>
                            </div>
                        </div> 
                        <div className="saving3">
                            <img src={rect} alt=""/>
                            <div className="text-saving">
                                <h4>$.240S,39</h4>
                                <span>Saving for home</span>
                            </div>
                        </div> 
                        </div>
                </div>
            </div>
        )
    }
}

export default Content; 
