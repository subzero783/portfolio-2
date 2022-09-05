import React from 'react'
import './Glitch.scss'

const Glitch = ({ text }) => {

    return(
        <p className="glitch" data-text={text}>{text}</p>
    );
}

export default Glitch;