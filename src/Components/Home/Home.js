import React, { useEffect, useState } from 'react';

const Home = () => {
    const [allData, setAllData] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setAllData(data))
    },[])
    return (
        <div>
            <h1>Fit-Out-Syco</h1>
            {
            allData.map(data => console.log(data))
            }
        </div>
    );
};

export default Home;