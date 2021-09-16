import React from "react";
import Navbar from '../components/Navbar';

const About = () => {
    return (
        <div 
        style={{
                
            backgroundColor:'#250001'
            
        }}>
            <Navbar/>
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh'
                
            }}
        >
            <div
            >
            
            <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, totam.</h1>
            </div>
            
        </div>
        </div>
    );
};

export default About;