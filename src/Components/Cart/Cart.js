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
        </div>
    );
};

export default Cart;