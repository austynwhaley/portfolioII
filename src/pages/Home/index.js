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
                      'Full Stack Develop',
                      500,
                      'Software Engin',
                      500,
                      "Web Dev",
                      500,
                      'Designer',
                      1500,
                      'Creator',
                      1500,
                      'Problem solver',
                      1500,
                      'Master Googler',
                      1500,
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