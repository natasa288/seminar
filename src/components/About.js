import React from 'react';
import "./About.css";
import image from "../image.jpg";


const About = () => {
    return (
          
          <div className='conatiner'>
            <div className='conatiner1'>
          <h1>About page</h1>
          <p>This is the about page of the BlaBla Chat Application.
          This is the simpliest Chat app you will ever find.</p>
        <p> With our app, you can easily share messages with your friends and stay connected.</p>
        <p>Our mission is to provide a seamless and enjoyable messaging experience. Whether you're chatting one-on-one or in a group, BlaBla Chat has got you covered!</p>
        <p>Start conversations and stay connected with the people who matter most to you. </p>
            <p className='p1'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Send your friends some messages,brighten they day!</p>
            <img className='bla' src={image} />
                      <div className='conatiner2'> </div>
              <h1>JOIN US NOW!</h1>
            </div>
          </div>
    );
  }


export default About;
