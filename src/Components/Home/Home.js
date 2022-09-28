import React, { useEffect, useState } from 'react';
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
        <div>
            <h1 className='data-title'>Fit-Out-Syco</h1>
            <div className='home'>
                <div className="data-cart">
                {
                allData.map(data => <Data
                key={data.id}
                data={data}
                ></Data>)
                }
                </div>
                <div className="calculation-cart">
                    <h2>Kaiser Tanveer</h2>
                </div>
            </div>
        </div>
    );
};

export default Home;