import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"
import React from 'react';
import Card from "../../components/Card/Card"
import Navbar from '../../components/Navbar/Navbar';


function About() {
    return(

      <div className='aboutContainer'>
        <Card
        bootstrap="mx-auto card w-50"
        title= "About Me"
        animate="fade-right">
            <p>
                I grew up in belevue ky
            </p>
        </Card>
        
      </div>
    )
}

export default About;