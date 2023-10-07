import React from 'react';
import './App.css';
import Footer from './Component/Footer/Footer';
import Plans from './Component/Plans/plans';
import Hero from './Component/Hero';
import Code from './Component/Code/code';
import Testimonials from './Component/Testimonials/Testimonials';
import Join from './Component/Join/Join';
function App() {
  
  
  return (
    <div className="App">
      <div>
      <Hero/></div>
      <div>
      <Code/></div>
      <Plans/>
      
      <Testimonials/>
      <Join/>
      <Footer/>       
    </div>
  )
}

export default App;
