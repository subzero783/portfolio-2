
import React from 'react';
import './Shapes.scss';

export default function Shapes(){

    return(
        <div id="shapes">
            {
                [1,2,3,4,5,6,7,8,9,10].map((item, index) => {
                    return(
                        <img 
                            style={{
                                left: `${(index+1) * 10}%`,
                                bottom: `${Math.random() *
                                (+((index+1) % 2 === 0 ? 10 : 90) - +((index+1) % 2 === 0 ? 5 : 80)) +
                                +((index+1) % 2 === 0 ? 5 : 80)}%`,
                            }}

                            key={index} 

                            className={`shape ${Math.floor(Math.random() * 10) % 2 === 0 ? "move-up" : "move-down"}`}
                            alt="shape"
                            src={process.env.PUBLIC_URL + '/images/shapes/' + (index + 1) + '.png'}
                        />
                    )
                })
            }
        </div>
    );
}