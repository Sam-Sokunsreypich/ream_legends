import React from 'react'
import AOS from 'aos';  // Correct: with uppercase 'AOS'
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';


export default function Story() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // You can customize this
      once: false, // Optional: whether animation should happen only once
    });
  }, []); 
  const [showImage, setShowImage] = useState(false);

  const handleClick_1 = () => {
    setShowImage(prevShowImage => !prevShowImage);  // Toggle the image visibility
  };

  const [showImage_2, setShowImage_2] = useState(false);

  const handleClick_2 = () => {
    setShowImage(prevShowImage => !prevShowImage);  // Toggle the image visibility
  };
  return (
    <>
    <div>


    {/* <h1 className="font-dragon text-gradient text-6xl font-bold tracking-wider rounded-full flex justify-center items-center gap-4 hover:text-yellow-300 hover:scale-105 transition duration-300">
      story line </h1> */}
    <img 
    src="./assets/story_1.png" 
     data-aos="fade-right" 
     data-aos-duration="1500" 
     className="mt-10 px-5 pt-5 mx-auto" 
     alt="story_header" 
    /> 
</div>
  <div className="flex flex-col justify-center items-center text-gray-100 mb-9 text-2xl "data-aos="fade-up" 
     data-aos-duration="1500" 
    >
  <div >
    <h3 className="my-5 font-suwannaphum"  onClick={handleClick_1}>ខ្សែទី១</h3>
    {showImage && (
        <img 
          src="./assets/line_1.jpg" 
          alt="Description" 
          className="w-64 h-full object-cover rounded-lg shadow-lg"
        />
      )}
   </div>
   <div>
    <h3 className="my-5 font-suwannaphum" onClick={handleClick_2}>ខ្សែទី២</h3>
    {showImage && (
        <img 
          src="./assets/line_2.jpg" 
          alt="Description" 
          className="w-64 h-full object-cover rounded-lg shadow-lg"
        />
      )}
   </div>
   <div>
    <h3 className="my-5 font-suwannaphum" onClick={handleClick_2}>ខ្សែទី៣</h3>
    {showImage && (
        <img 
          src="./assets/line_3.jpg" 
          alt="Description" 
          className="w-64 h-full object-cover rounded-lg shadow-lg"
        />
      )}
   </div>
   <div>
    <h3 className="my-5 font-suwannaphum" onClick={handleClick_2}>ខ្សែទី៤</h3>
    {showImage && (
        <img 
          src="./assets/line_4.jpg" 
          alt="Description" 
          className="w-64 h-full object-cover rounded-lg shadow-lg"
        />
      )}
   </div>
   <div>
    <h3 className="my-5 font-suwannaphum" onClick={handleClick_2}>ខ្សែទី៥</h3>
    {showImage && (
        <img 
          src="./assets/line_5.jpg" 
          alt="Description" 
          className="w-64 h-full object-cover rounded-lg shadow-lg"
        />
      )}
   </div>
   <div>
    <h3 className="my-5 font-suwannaphum" onClick={handleClick_2}>ខ្សែទី៦</h3>
    {showImage && (
        <img 
          src="./assets/line_6.jpg" 
          alt="Description" 
          className="w-64 h-full object-cover rounded-lg shadow-lg"
        />
      )}
   </div>
   <div>
    <h3 className="my-5 font-suwannaphum" onClick={handleClick_2}>ខ្សែទី៧</h3>
    {showImage && (
        <img 
          src="./assets/line_7.jpg" 
          alt="Description" 
          className="w-64 h-full object-cover rounded-lg shadow-lg"
        />
      )}
   </div>
  </div>
  <div><p className="font-suwannaphum text-center text-gray-100 text-xl p-4">ដកស្រង់ចេញពីរឿងរាមកេរ្តិ៍ ដែលរៀបរៀងដោយ​ លោកលាងហាប់អាន</p></div>
    </>
  )
}
