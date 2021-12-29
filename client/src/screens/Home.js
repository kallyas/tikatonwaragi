import React from 'react';
import Navbar from '../components/Navbar'
import bottle from '../assets/tikaton-no-bg.png'

const Home = () => {
  return (   
    <div className='home-page'>
      <Navbar/>
      
        <div className='home-top'>
          
          <div className='home-top-left'>
            <div><h4>Kawoomera aguuse</h4></div>
              <p>Tikaton Waragi is the only Gin in the world to use the unique combination of Botanicals including lime peel, nutmeg and cassia bark.</p>
          </div >
          <div className='home-top-right'>
          <img src={bottle} alt="Logo" height={400} width={300}/>;
          </div>
        
     </div>
      
    </div>
  );
};

export default Home;


