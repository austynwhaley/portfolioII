import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"
import React from 'react';
import CircleIcon from '../../components/CircleIcon/CircleIcon';

const calculateAge = (birthday) => {
  const birthDate = new Date(birthday);
  const today = new Date();
  
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  
  return age;
}

const birthday = new Date(1994, 8, 20);
const age = calculateAge(birthday);


const About = () => {
    return(

      <div className='container d-flex justify-content-center'>
        <div className='projectsCont'>
            <h1>About Me</h1>
            <hr/>
            <div className="info">
                <p>My Name is <span>Austyn Whaley</span>, I am {age} Years old and I was born in <span>Cincinnati Ohio</span>.</p>
                <p>I grew up all around different areas in Northern Kentucky and went to a few different schools before I ended up in Belleuve,KY; and there is where I graduated from Bellevue High School in 2012.</p>
                <p>I worked a few different jobs right out of highschool not totally sure what skills I wanted to develop for a career. To whcih eventually in 2020 I enrolled in a <span>Full Stack Engineering</span> program which was taught by <span>The Ohio State University</span>.</p>
                <p>I currently I work at <span>Fischer Homes</span> on the development team as an <span>Software Engineer</span>.</p>
                <p> I have a wide range of development interests from standard Frontend|Backend Web Application development with <span>MERN</span>, <span>MEVN</span>, <span>MEAN</span> tech stacks, to <span>AI</span> and <span>Web3</span> development and <span>Machine Learning</span>, and even to game development with <span>Unreal</span> and <span>Unity</span>.</p>
                <p> I'm <span>hard working </span>and a <span>dedicated</span> developer constantly looking for new ideas and opportunities to strenghten my skills and knowledge</p>
                <p> Thanks for reading!</p>
              </div>
              <hr/>
              <CircleIcon/>
              <div className='linksCon'>
                <p className='spacer'>
                  <a className='links' href='https://www.linkedin.com/in/austyn-whaley-a820421b5/'>LinkedIn</a>|
                  <a className='links' href='https://github.com/austynwhaley'>GitHub</a>|
                  <a className='links'href='https://www.instagram.com/whaleanator/'>Instagram</a>|
                  <a className='links'href='https://twitter.com/whaleanator'>Twitter</a>
                </p>
              </div>
        </div>
    </div>
    )
}

export default About;