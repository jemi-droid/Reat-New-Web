import React from 'react';
import './overall.css';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';

import {
    FaRegHandshake,
    FaBasketballBall,
    FaBinoculars,
    FaBookOpen,
    FaBalanceScale,
    FaWallet,
    FaMale,
    FaRegCreditCard,
    FaTools,
    FaSortAmountUpAlt
}from "react-icons/fa";
// import { IconName } from "react-icons/gi";,
import { BsPersonCheck,BsGraphUp,BsPersonBadge,BsBuilding,BsGlobe,BsCashCoin,BsCircleHalf } from "react-icons/bs";
import useDarkMode from 'use-dark-mode';
// import Toggle from './Toggle';
import { ToggleButton } from 'react-bootstrap';
const Dashboard = () => {
    const darkMode = useDarkMode(false);
    return (
       
        <div>
   
            <h1 className='heading'>DashBoard <Nav.Link className='heading-9' href="/">Home </Nav.Link> <span className='heading-9'> | </span> <Nav.Link className='heading-9' href="/dashboard"> DashBoard</Nav.Link></h1>
            <div className="underline-head"></div>
            <div class="container-block container-flexbox">
                <div class="item-col-3 borderRad bodShadow">
                    
                    <div style={{ margin: '28px' }}>Register Details</div>
                    <div className='container-block container-flexbox'>
                    <div class="item-col-3" style={{ fontSize: '28px' }}><BsPersonCheck/></div>
                    <div class="item-col-3">Customer</div>
                    <div class="item-col-3" style={{ textAlign: 'right' }}>348</div>
                    </div>
                    <div className='container-block container-flexbox'>
                    <div class="item-col-3" style={{ fontSize: '28px' }}><BsPersonBadge/></div>
                    <div class="item-col-3">Driver</div>
                    <div class="item-col-3" style={{ textAlign: 'right' }}>13</div>
                    </div>
                    <div className='container-block container-flexbox'>
                    <div class="item-col-3" style={{ fontSize: '28px' }}><FaRegHandshake/></div>
                    <div class="item-col-3">Partner</div>
                    <div class="item-col-3" style={{ textAlign: 'right' }}>10</div>
                    </div>
                    <div className='container-block container-flexbox'>
                    <div class="item-col-3" style={{ fontSize: '28px' }}><BsBuilding/></div>
                    <div class="item-col-3">Corporate</div>
                    <div class="item-col-3" style={{ textAlign: 'right' }}>103</div>
                    </div>
                    <div className='container-block container-flexbox'>
                    <div class="item-col-3" style={{ fontSize: '28px' }}><BsGlobe/></div>
                    <div class="item-col-3">Country</div>
                    <div class="item-col-3" style={{ textAlign: 'right' }}>1</div>
                    </div>
                    <div className='container-block container-flexbox borderRad-bottom'>
                    <div class="item-col-3" style={{ fontSize: '28px' }}><BsCircleHalf/></div>
                    <div class="item-col-3">City</div>
                    <div class="item-col-3" style={{ textAlign: 'right' }}>1</div>
                    </div>
                </div>

                <div class="item-col-3 borderRad bodShadow">
                    
                    <div style={{ margin: '28px' }}>Trip Details</div>
                    <div className='container-block container-flexbox'>
                    <div class="item-col-3" style={{ fontSize: '28px' }}><FaBasketballBall/></div>
                    <div class="item-col-3">Total Trips</div>
                    <div class="item-col-3" style={{ textAlign: 'right' }}>14</div>
                    </div>
                    <div className='container-block container-flexbox'>
                    <div class="item-col-3" style={{ fontSize: '28px' }}><FaBinoculars/></div>
                    <div class="item-col-3">Running Trips</div>
                    <div class="item-col-3" style={{ textAlign: 'right' }}>0</div>
                    </div>
                    <div className='container-block container-flexbox'>
                    <div class="item-col-3" style={{ fontSize: '28px' }}><FaBookOpen/></div>
                    <div class="item-col-3">Completed Trips</div>
                    <div class="item-col-3" style={{ textAlign: 'right' }}>11</div>
                    </div>
                    <div className='container-block container-flexbox'>
                    <div class="item-col-3" style={{ fontSize: '28px' }}><FaMale/></div>
                    <div class="item-col-3">Scheduled Trips</div>
                    <div class="item-col-3" style={{ textAlign: 'right' }}>0</div>
                    </div>
                    <div className='container-block container-flexbox borderRad-bottom'>
                    <div class="item-col-3" style={{ fontSize: '28px' }}><FaBalanceScale/></div>
                    <div class="item-col-3">Cancelled Trips</div>
                    <div class="item-col-3" style={{ textAlign: 'right' }}>3</div>
                    </div>
                    
                </div>

                <div class="item-col-3 borderRad bodShadow">
                    
                    <div style={{ margin: '28px' }}>Payment Details</div>
                    <div className='container-block container-flexbox'>
                    <div class="item-col-3" style={{ fontSize: '28px' }}><FaWallet/></div>
                    <div class="item-col-3">Total</div>
                    <div class="item-col-3" style={{ textAlign: 'right' }}>473.67</div>
                    </div>
                    <div className='container-block container-flexbox'>
                    <div class="item-col-3" style={{ fontSize: '28px' }}><FaSortAmountUpAlt/></div>
                    <div class="item-col-3">Wallet</div>
                    <div class="item-col-3" style={{ textAlign: 'right' }}>0.00</div>
                    </div>
                    <div className='container-block container-flexbox'>
                    <div class="item-col-3" style={{ fontSize: '28px' }}><FaRegCreditCard/></div>
                    <div class="item-col-3">Card</div>
                    <div class="item-col-3" style={{ textAlign: 'right' }}>0.00</div>
                    </div>
                    <div className='container-block container-flexbox'>
                    <div class="item-col-3" style={{ fontSize: '28px' }}><BsCashCoin/></div>
                    <div class="item-col-3">Cash</div>
                    <div class="item-col-3" style={{ textAlign: 'right' }}>473.67</div>
                    </div>
                    <div className='container-block container-flexbox'>
                    <div class="item-col-3" style={{ fontSize: '28px' }}><BsGraphUp/></div>
                    <div class="item-col-3">Promo</div>
                    <div class="item-col-3" style={{ textAlign: 'right' }}>0.00</div>
                    </div>
                    <div className='container-block container-flexbox borderRad-bottom'>
                    <div class="item-col-3" style={{ fontSize: '28px' }}><FaTools/></div>
                    <div class="item-col-3">Remaining</div>
                    <div class="item-col-3" style={{ textAlign: 'right' }}>0.00</div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Dashboard;