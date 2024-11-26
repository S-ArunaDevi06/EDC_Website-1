
import './Hero.css';
import React, { useRef,useEffect,useState } from 'react';



function App({ homeRef,eventsRef, speakersRef, committeeRef, contactRef, scrollToSection }){
  
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });
  
  const [displayedText, setDisplayedText] = useState(""); // State for animated text

  const eventName = "Mela";// event name

  
  useEffect(() => {
    const targetDate = new Date("2024-12-31T23:59:59"); //  target date and time here

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft({ hours, minutes, seconds });
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer); 
  }, []);


  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      
      setDisplayedText(eventName.slice(0, index + 1));

      index++;
      if (index === eventName.length) clearInterval(interval); // Stop when full text is displayed
    }, 250); // Adjust speed 

    return () => clearInterval(interval);
  }, [eventName]);



  return (
    <div className='Background'>
      
      <nav className='Header'>
        <img src={'images/lakshaya.jpg'} className="appLogo" alt="ReactLogo"></img>
        <ul className='options'>
          <listItem className='optionItem' onClick={() => scrollToSection(homeRef)} style={{ cursor: 'pointer' }}>Home</listItem>
          <listItem className='optionItem' onClick={() => scrollToSection(eventsRef)} style={{ cursor: 'pointer' }}>Events</listItem>
          <listItem className='optionItem' onClick={() => scrollToSection(speakersRef)} style={{ cursor: 'pointer' }}>Speakers</listItem>
          <listItem className='optionItem' onClick={() => scrollToSection(committeeRef)} style={{ cursor: 'pointer' }}>Commitee</listItem>
          <listItem className='optionItem' onClick={() => scrollToSection(contactRef)} style={{ cursor: 'pointer' }}>Contact</listItem>
        </ul>
        <img src={'images/profile.jpeg'} className="profile" alt="profile"  style={{ cursor: 'pointer' }}></img>
      </nav>

      {/* Countdown Timer */}
      <div className="countdown-timer">
      <div className="countdown-flex-container">
        <p>
          {displayedText}&nbsp;&nbsp;&nbsp;&nbsp;
          {timeLeft.hours.toString().padStart(2, '0')} : 
          {timeLeft.minutes.toString().padStart(2, '0')} : 
          {timeLeft.seconds.toString().padStart(2, '0')}
        </p>
        <button className="register-button" style={{ cursor: 'pointer' }}>Register</button>
        </div>
      </div>

      <div ref={homeRef} className='picture-description-container'>
        <img src={'images/group_photo.jpg'} className='Entrepreneur-pic' alt="entreprenuer-image"></img>
        <p className='LakshayaText'>LAKSHYA</p>
        {/*<p className='Description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>*/}
      </div>

      <div className='AboutUs-container'>
        <h1 className='AboutUs'>AboutUs</h1>
        <p className='AboutUs-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
    
  );
}

export default App;
