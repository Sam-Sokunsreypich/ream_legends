import React from 'react'
import AOS from 'aos';  // Correct: with uppercase 'AOS'
import 'aos/dist/aos.css';
import { useEffect } from 'react';

 
export default function UserInterface() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // You can customize this
      once: false, // Optional: whether animation should happen only once
    });
  }, []);
  return (
    <>
      {/* <div>
      <img 
    src="./assets/ui_header.png" 
     data-aos="fade-right" 
     data-aos-duration="1500" 
     className="mt-10 p-5 mx-auto" 
     alt="ui_header" 
    /> 
      </div> */}
      <h2 className="font-dragon text-yellow-500 text-3xl mt-8  text-center">User Interface</h2>
      <div className="mt-9 md:mt-10 mx-10 mb-10 ">
    <img 
     src="./assets/ui_4.jpg" data-aos="fade-up" 
     data-aos-duration="1500"
    className="block mx-auto ring-4 ring-yellow-400 rounded-md ring-offset-1 ring-offset-transparent md:px-24"
     alt="body"  />
  </div>
      <div className="mt-9 md:mt-10 mx-10 mb-10 ">
    <img 
     src="./assets/ui_2.png" data-aos="fade-up" 
     data-aos-duration="1500"
    className="block mx-auto pb-5 ring-4 ring-yellow-400 rounded-md ring-offset-1 ring-offset-transparent md:px-24"
     alt="body"  />
  </div>
  <div className="mt-9 md:mt-10 mx-10 mb-10 ">
    <img 
     src="./assets/ui-3.png" data-aos="fade-up" 
     data-aos-duration="1500"
    className="block mx-auto pb-5 ring-4 ring-yellow-400 rounded-md ring-offset-1 ring-offset-transparent md:px-24"
     alt="body"  />
  </div>
    </>
  )
}
