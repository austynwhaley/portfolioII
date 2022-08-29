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
             <div className="info">
                <p style={{fontSize: '1.4rem'}}>My Name is <span>Austyn Whaley</span>, I am 28 Years old and I was born in <span>Cincinnati Ohio</span>.</p> 
                <p style={{fontSize: '1.4rem'}}>I grew up all around different areas in Northern Kentucky and went to a few different schools before I ended up in Belleuve,KY; and there is where I graduated from Bellevue High School in 2012.</p>
                <p style={{fontSize: '1.4rem'}}>I currently I work at <span>Fischer Homes</span> on the development team as an <span>Applications Developer</span>.</p>
                <p style={{fontSize: '1.4rem'}}> I have a wide range of development interests from <span>blockchain</span> and <span>Web3</span> development with smart contracts, to <span>game</span> development.</p>
                <p style={{fontSize: '1.4rem'}}> I'm <span>hard working </span>and a <span>dedicated</span> developer constantly looking for new projects, new ideas and opportunities</p>
                <p style={{fontSize: '1.4rem'}}> Thanks for reading!</p>
              </div>
        </Card>
        
      </div>
    )
}

export default About;