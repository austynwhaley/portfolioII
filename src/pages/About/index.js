import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"
import React from 'react';

const About = () => {
    return(

      <div className='container d-flex justify-content-center'>
        <div className='projectsCont'>
            <h1>About Me</h1>
            <hr/>
            <div className="info">
                <p>My Name is <span>Austyn Whaley</span>, I am 28 Years old and I was born in <span>Cincinnati Ohio</span>.</p>
                <p>I grew up all around different areas in Northern Kentucky and went to a few different schools before I ended up in Belleuve,KY; and there is where I graduated from Bellevue High School in 2012.</p>
                <p>I currently I work at <span>Fischer Homes</span> on the development team as an <span>Applications Developer</span>.</p>
                <p> I have a wide range of development interests from standard Web Application development with <span>MERN</span>, <span>MEVN</span>, <span>MEAN</span> tech stacks, to <span>blockchain</span> and <span>Web3</span> development and <span>smart contracts</span>, and even to game development with <span>Unreal</span> and <span>Unity</span>.</p>
                <p> I'm <span>hard working </span>and a <span>dedicated</span> developer constantly looking for new projects, new ideas and opportunities</p>
                <p> Thanks for reading!</p>
              </div>
              <hr/>
              <div className='linksCon'>
                <p className='spacer'>
                  <a className='links' href='https://www.linkedin.com/in/austyn-whaley-a820421b5/'>LinkedIn</a>|
                  <a className='links' href='https://github.com/austynwhaley'>GitHub</a>|
                  <a href='https://www.instagram.com/whaleanator/'>Instagram</a>|
                  <a href='https://twitter.com/whaleanator'>Twitter</a>
                </p>
              </div>
        </div>
    </div>
    )
}

export default About;