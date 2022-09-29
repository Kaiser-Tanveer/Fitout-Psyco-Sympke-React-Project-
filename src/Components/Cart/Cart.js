import React from 'react';
import {addRestTime1, addRestTime2, addRestTime3, addRestTime4 } from '../Utilities/Handlers';
import './Cart.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Cart = () => {
    
    //     // Add to Local Storage 
    //     const addRestTime1 = (num) => {
    //         addToDB(num)
    //     }
        const notify = () => toast("Congratulations!!! You are done for Today!",
        {position: 'top-center'});
    
    return (
        <div className='cart'>
            <div className="personal-info">
            <h2><img src="./image/MyAbs.jpg" alt="" />  Kaiser Tanveer</h2>
            <p style={{textAlign: 'center'}}>From: Kanchana, Satkania, Chattogram</p>
            <hr style={{width: '70%'}}/>
            </div>
            <div className="rest">
                <h2>Break Time</h2>
                <div className="btn-group">
                    <button onClick={addRestTime1} className='rest-btn'><span id='rest-second-1'>20</span>s</button>
                    <button onClick={addRestTime2} className='rest-btn'><span id='rest-second-2'>30</span>s</button>
                    <button onClick={addRestTime3} className='rest-btn'><span id='rest-second-3'>40</span>s</button>
                    <button onClick={addRestTime4} className='rest-btn'><span id='rest-second-4'>60</span>s</button>
                </div>
                <hr />

                <div className="calculate-time">
                    <h2>Total Time</h2>
                    <p className='exercise-time'>Exercise Time: <span id='exercise-time'>00</span> seconds</p>
                    <p className='exercise-time'>Break Time: <span id='rest-time'>00</span> seconds</p>
                </div>

                <div className="toast">
                    <button onClick={notify} className='toast-btn'>Activity Completed</button>
                    <ToastContainer/>
                </div>
            </div>
        </div>
    );
};

export default Cart;