

import React,{ useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Contact(){
    
    useEffect(() => {
        AOS.init({
            duration : 2000
        });
        AOS.refresh();
    }, []);

    return(
        <div id="contact">
            <div className="container">
                <div className="row">

                </div>
            </div>
        </div>
    );
}