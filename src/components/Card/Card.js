import 'bootstrap/dist/css/bootstrap.min.css';
import "../Card/Card.css"
import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const Card = (props) => {
    return(
        <div className='cardContainer' >
            <div className={`cardBody ${props.bootstrap}`} data-aos={props.animate} data-aos-duration="2500">
                <h1 className='cardTitle'>{props.title}</h1>
                <div className='children'>
                    {props.children}
                </div>
            </div>
            
        </div>
    );
}

export default Card;