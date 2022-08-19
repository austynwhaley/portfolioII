import 'bootstrap/dist/css/bootstrap.min.css';
import TypeAnimation from 'react-type-animation';
import "./style.css"
import React from 'react';

function Home() {
    return(

      <div className='homepage'>
        <div className='header'>
          <div className='headerContainer'>
              <h1 className='hello'>Hello world, I'm Austyn Whaley and I am a...</h1>
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
        
      </div>
    )
}

export default Home;