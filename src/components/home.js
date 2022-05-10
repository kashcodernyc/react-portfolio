import React, {useEffect, useRef} from 'react'
import { init } from 'ityped';




const Home= () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      backSpeed: 70,
      strings: [`Web Developer 💻 `, 'Web Designer 🎨', 'Soccer Enthusiast ⚽', 'Outdoors Lover ⛰️', 'Foodie 🍕', 'Traveler 🌏'],
    });
  },[])
    return (
    <div className = 'mainContainer'>
      <div className = 'maincontent'>
           <p className = 'maincontentHeader'>
             <span className  = 'intro-name'>Hi, my name is Prakash</span> <br/><span className = 'nyc'> I am a New York City based </span> <br/> <span className = 'self-description' ref = {textRef}> </span></p>

      </div>
         <div className = 'avatar'>
            <div className = 'avatar-btn'>
              <a href = '/contact' id = 'mainButton' className = 'button'>Contact</a>
              <a href = '/portfolio' id = 'mainButton' className = 'button'>Portfolio</a>
            </div>
            <div className = 'avatar-container'>
            </div>
         </div>
      </div>
    )
}

export default Home
