import React, { useState } from 'react'
import './Glitch.scss'
//Styeld Component does not support @for loops



const Glitch = ({ text }) => {

    return(
        <p className="glitch" data-text={text}>{text}</p>
    );
}

export default Glitch;