

import React, { useState, useEffect } from 'react';
import './Hero.scss';




export default function Hero(){
    
    const [headlineContainer, setHeadlineContainer] = useState({
        width: 0,
        height: 0
    });

    const updateDimensions = () => {
        if (headlineContainer.height !== window.innerHeight) {
            setHeadlineContainer({
                height: window.innerHeight
            })
        }
        if (headlineContainer.width !== window.innerWidth) {
            setHeadlineContainer({
                width: window.innerWidth
            })
        }
    }

    useEffect(() => {
        setHeadlineContainer({
            width: window.innerWidth,
            height: window.innerHeight
        })
        window.addEventListener('resize', updateDimensions);
        document.body.addEventListener('mousemove', (e) => {
            var amountMovedX = (e.clientX * -.1 / 8);
            var amountMovedY = (e.clientY * -.1 / 8);
            var x = document.getElementsByClassName("parallax-hero-item");
            var i;
            for (i = 0; i < x.length; i++) {
              x[i].style.transform='translate(' + amountMovedX + 'px,' + amountMovedY + 'px)'
            }
        });
        return()=>{
            window.removeEventListener('resize', updateDimensions);
        }
    }, []);

    return(
        <div id="hero">
            <video autoPlay loop muted>
                <source src={process.env.PUBLIC_URL + '/videos/abstract-video-bg.mp4'} type="video/mp4"/>
            </video>
            <div id="headline-container" className="animate parallax-hero-item">
                <h1 className="parallax-hero-item">Hello</h1>
            </div>
        </div>
    )
}