import React from 'react'
import AOS from 'aos';  // Correct: with uppercase 'AOS'
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Story() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // You can customize this
      once: false, // Optional: whether animation should happen only once
    });
  }, []); 
  return (
    <>
    <div>
      
    <img 
    src="./assets/story_1.png" 
     data-aos="fade-right" 
     data-aos-duration="1500" 
     className="mt-10 p-5 mx-auto" 
     alt="story_header" 
    /> 
</div>
    <div className="mt-9 md:mt-10 mx-10 mb-10 ">
    <img 
     src="./assets/story.jpg" data-aos="fade-up" 
     data-aos-duration="1500"
    className="block mx-auto ring-4 ring-yellow-400 ring-offset-1 ring-offset-transparent md:px-24"
     alt="story"  />
  </div>
    </>
  )
}
