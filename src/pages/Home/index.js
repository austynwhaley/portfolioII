import 'bootstrap/dist/css/bootstrap.min.css';
import TypeAnimation from 'react-type-animation';
import "./style.css"
import React from 'react';
import Card from "../../components/Card/Card"
import Navbar from "../../components/Navbar/Navbar"

function Home() {
    return(

      <div className='homepage'>
        <Navbar
        status = ""/>
        <div className='header'>
          <div className='headerContainer'>
              <h1 className='hello'>Hello, I'm Austyn Whaley and I am a...</h1>
              <h2 className='typeTitle'> 
                  <TypeAnimation
                  className="cursor"
                  repeat={1}
                  wrapper="h1"
                  cursor={false}
                  sequence={[
                      'Full Stack Develp',
                      1000,
                      'Software Engin',
                      1000,
                      "Web Dev",
                      1000,
                      'Desinger',
                      1000,
                      'Creator',
                      1000,
                      'Problem solver',
                      1000,
                      'Master Googler',
                      1000,
                      'Developer'
                  ]}
                  />
              </h2>
          </div>
        </div>

        <div className='cards'>
          {/*Summary Card*/}
          <Card
                bootstrap="mr-auto card w-50"
                title= "Summary"
                animate="fade-right">
                <p style={{color:'white'}}>I am a dedicated and adaptable employee who  handles fast-paced work. Proven willingness to take on any task to support team and help business succeed. Offers strong time management and problem solving abilities. </p>
                <div className='links'>
                  <a href='austyn_whaley@yahoo.com'>Email</a>|
                  <a href='https://www.linkedin.com/in/austyn-whaley-a820421b5/'>LinkedIn</a>| 
                  <a href='https://github.com/austynwhaley'>Github</a>| 
                  <a href='https://www.instagram.com/whaleanator/'>Instagram</a>| 
                  <a href='https://twitter.com/whaleanator'>Twitter</a></div>
                  
                {/* insert email, linked in, github, insta, twitter links */}
        
                </Card>;
                {/*Toolkit Card*/}
                <Card
                bootstrap="ml-auto card w-50"
                title= "Toolkit"
                animate="fade-left">
                <p className='toolkit'>HTML, CSS, Javascript, jQuery, Bootstrap, Bulma, Node.js, MySQL, MongoDB, Git, Postman, React.js, PHP, C#, C++</p>
                {/*find icons for toolkit*/}
                </Card>;
                
                {/*Projects Card*/}
                <Card
                bootstrap="mx-auto card w-50"
                title= "Projects"
                animate="fade-right">
                  {/*flesh out projects card with either current portfolio images or placeholders*/}
                </Card>
        </div>
        
      </div>
    )
}

export default Home;