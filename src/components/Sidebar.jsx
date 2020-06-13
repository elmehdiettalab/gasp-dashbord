import React, { Component } from 'react'

// ------  Image assets (icons)
import icon1 from '../imgs/business-and-finance.png'; 
import icon2 from '../imgs/compass.png'; 
import icon6 from '../imgs/menu.png'; 
import icon4 from '../imgs/pin.png'; 
import icon5 from '../imgs/youtube.png'; 
import icon3 from '../imgs/document.png'; 

// Stylesheet 
import '../styles/sidebar.scss'; 


class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <div className="logo">
                    <span>D.</span>
                </div>
                <ul className="sidebar-items">
                    <li><img src= {icon1} alt=""/></li>
                    <li><img src={icon2} alt=""/></li>
                    <li><img src={icon3} alt=""/></li>
                    <li><img src={icon4} alt=""/></li>
                    <li><img src={icon5} alt=""/></li>
                </ul>

                <div className="lastIcon">
                    <div className="imgIcon">
                        <img src={icon6} alt=""/>
                    </div>
                </div>

            </div>
        )
    }
}

export default Sidebar; 
