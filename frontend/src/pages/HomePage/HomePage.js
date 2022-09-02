

import React, { useState, useEffect } from 'react';
// Hero component
import Hero from '../../components/Hero/Hero';

// Sections components
import About from './sections/About/About';


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
            <About />
        </div>
    );
}

export default HomePage;