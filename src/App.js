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
      <Card
      bootstrap="mr-auto card w-50"
      title= "Summary"
      animate="fade-right">
      <p style={{color:'white'}}>I am a dedicated and adaptable employee who  handles fast-paced work. Proven willingness to take on any task to support team and help business succeed. Offers strong time management and problem solving abilities. </p>

      </Card>;
      <Card
      bootstrap="ml-auto card w-50"
      title= "Toolkit"
      animate="fade-left"
      />;
      <Card
      bootstrap="mr-auto card w-50"
      title= "Projects"
      animate="fade-right"
      />;
    </div>
      
  );
}