import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Data from '../Data/Data';
import './Home.css'

const Home = () => {
    const [allData, setAllData] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setAllData(data))
    },[])
    return (
        <div className='home'>
            <div className='data-wrapper'>
            <h1 className='data-title'><img className='logo' src="./image/logo.png" alt="" /> <span className='colored-part'>Fit Out</span> Psyco</h1>
            <h2 className='data-title'>Complete Your Daily Steps</h2>
                <div className="data-cart">
                {
                allData.map(data => <Data
                key={data.id}
                data={data}
                ></Data>)
                }
                </div>
            </div>
                <div className="calculation-cart">
                    <Cart></Cart>
                </div>
        </div>
    );
};

export default Home;