import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import "./App.css"
import React from 'react';

  
  
export default function App() {
  return (
    
    <div className='App'>
      <Navbar/>;
      <Header/>;
      {/*Summary Card*/}
      <Card
      bootstrap="mr-auto card w-50"
      title= "Summary"
      animate="fade-right">
      <p style={{color:'white'}}>I am a dedicated and adaptable employee who  handles fast-paced work. Proven willingness to take on any task to support team and help business succeed. Offers strong time management and problem solving abilities. </p>
      <div className='links'>
        <a href=''>Email</a>|
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
      </Card>;
      {/*HTML, CSS, Javascript, jQuery, Bootstrap, Bulma, Node.js, MySQL, MongoDB, Git, Postman, React.js, PHP, C#, C++,*/}
      {/*Projects Card*/}
      <Card
      bootstrap="mx-auto card w-50"
      title= "Projects"
      animate="fade-right">
        
      </Card>
    </div>
      
  );
}