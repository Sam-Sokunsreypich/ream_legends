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
    <div className="flex justify-center items-center">
      <img className=" w-auto h-screen" src="./assets/test.jpg" alt="Description of the image" />
    </div>
  )
}
