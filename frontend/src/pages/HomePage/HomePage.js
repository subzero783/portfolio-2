import React, { useState, useEffect } from 'react';


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
        <>
            <p>message:</p>
            <p>{message}</p>
            <div class="container">
            </div>
        </>
    );
}

export default HomePage;