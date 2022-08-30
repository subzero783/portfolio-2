

import React, { useState, useEffect } from 'react';
import Hero from '../../components/Hero/Hero';


function HomePage(){

    const [message, setMessage] = useState('');

    useEffect(()=>{

        const fetchData = async () => {
          const result = await fetch(`/api/message/`);
          const body = await result.json();
          setMessage(body.message);
        }
        fetchData();
    
    },[]);

    return(
        <div id="homepage-container">
            {/* <p>message:</p>
            <p>{message}</p> */}
            <Hero />
        </div>
    );
}

export default HomePage;