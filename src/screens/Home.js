import React from 'react';
import Navbar from '../components/Navbar'

const Home = () => {
  return (   
    <div className='home-page'>
      <Navbar/>
      
        <h1>Welcome to Tikaton!</h1>
        <div className='home-top'>
          Top
          <div className='home-top-left'>
left
          </div >
          <div className='home-top-right'>
right
          </div>
        
     </div>
      
    </div>
  );
};

export default Home;


