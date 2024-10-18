import React from 'react'
import AOS from 'aos';  // Correct: with uppercase 'AOS'
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // You can customize this
      once: false, // Optional: whether animation should happen only once
    });
  }, []);
  return (
    <div className="my-9  md:mx-20">
      <img className=" " src="./assets/homepage.jpg" alt="Description of the image" />
    </div>
  )
}
