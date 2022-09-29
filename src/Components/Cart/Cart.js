import React from 'react';
import './Cart.css'

const Cart = () => {
    return (
        <div className='cart'>
            <div className="personal-info">
            <h2><img src="./image/MyAbs.jpg" alt="" />  Kaiser Tanveer</h2>
            <p style={{textAlign: 'center'}}>From: Kanchana, Satkania, Chattogram</p>
            <hr style={{width: '70%'}}/>
            </div>
            <div className="rest">
                <h2>Rest Time</h2>
                <div className="btn-group">
                    <button className='rest-btn'><span>20</span>s</button>
                    <button className='rest-btn'><span>30</span>s</button>
                    <button className='rest-btn'><span>40</span>s</button>
                    <button className='rest-btn'><span>60</span>s</button>
                </div>
                <hr />

                <div className="calculate-time">
                    <h2>Total Time</h2>
                    <p className='exercise-time'>Exercise Time: <span>00</span>s</p>
                    <p className='exercise-time'>Rest Time: <span>00</span>s</p>
                </div>

                <div className="toast">
                    <button className='toast-btn'>Activity Completed</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;