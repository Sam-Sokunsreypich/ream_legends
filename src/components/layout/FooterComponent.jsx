import React from 'react'
import { Link } from 'react-router-dom'

export default function FooterComponent() {
  return (
    
  <footer className=" text-white pt-5 pb-3" style={{ backgroundImage: `url('./assets/nav_bg.jpg')` }}>
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row justify-between items-center">
        <Link to="/" className="flex items-center flex-col space-x-3 rtl:space-x-reverse">
          <img src="./assets/Logo_name.png" className="h-10 md:h-16 md:pl-4" alt="Flowbite Logo" />
          <small className="text-gray-50">-Game x Education-</small>
          {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Ream Legends</span> */}
        </Link>
      <div className="flex space-x-4 mb-2 md:mb-0">
        <a href="#" className="hover:text-gray-400">Terms of Service</a>
        <a href="#" className="hover:text-gray-400">Privacy Policy</a>
      </div>
      {/* <div className="flex space-x-4">
        <a href="https://facebook.com" target="_blank" className="text-xl hover:text-gray-400">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com" target="_blank" className="text-xl hover:text-gray-400">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://instagram.com" target="_blank" className="text-xl hover:text-gray-400">
          <i className="fab fa-instagram"></i>
        </a>
      </div> */}
    </div>
  </div>
</footer>



  )
}
