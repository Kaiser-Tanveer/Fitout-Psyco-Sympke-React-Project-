import React from 'react';
import { addCompleted } from '../Utilities/Handlers';
import './Data.css'

const Data = (props) => {
    // console.log(props.data);
    const {name, duration, image} = props.data;
    
    return (
        <div className='data'>
            <img src={image} alt="" />
            <h2>{name}</h2>
            <h4>Duration: {duration}</h4>
            <button onClick={()=>addCompleted(duration)} className='add-btn'>Add Completed</button>
        </div>
    );
};

export default Data;