import React from 'react'

export default function AboutUs() {
  const teamwork=[
    {
      id: 1,
      name:"Dom Hiroshi",
      img:"./assets/Rama.jpg",
      part: "(System)",
    },
    {
      id: 2,
      name:"Veth Somnang",
      img:"./assets/nang.jpg",
      part: "(Designer)",
    },
    {
      id: 3,
      name:"Dao sit soum",
      img:"./assets/Ravana.jpg",
      part: "(System)",
    },
    {
      id: 4,
      name:"Zean",
      img:"./assets/Rama.jpg",
      part: "(Designer)",
    },
    {
      id: 5,
      name:"Sam Sokunsreypich",
      img:"./assets/pich_1.jpg",
      part: "(Web Design)",
    },
    
  ]
  return (
    <div>
    <section className=" text-white py-20">
   
      <div className="max-w-screen-xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
        <p className="text-center font-englishFont text-lg max-w-2xl mx-auto mb-12">
          Welcome to <span className="text-indigo-500 font-bold">Ream Legends</span>, 
          where we believe in the power of teamwork and creativity to build unforgettable game experiences.
        </p>
      </div>

      {/* Mission Section */}
      <div className="max-w-screen-xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-indigo-400 mb-4 text-center">Our Mission</h2>
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <p className="text-lg leading-relaxed">
              Our mission is to create immersive and captivating games that inspire players to think, collaborate, 
              and explore. We aim to push the boundaries of storytelling and gameplay by fostering a culture of innovation and creativity.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img src="/assets/mission.jpg" alt="Mission" className="rounded-lg shadow-lg w-4/5"/>
          </div>
        </div>
      </div>

      {/* Teamwork Section */}
      <div className="bg-blue-500 mx-7 md:mx-12 my-7 md:my-12 p-5 rounded-2xl">
        {/* for advisor */}
        <h2 className="font-dragon text-2xl text-center p-5 text-gray-100 md:text-5xl ">Our advisor</h2>
        <div className=" flex flex-col font-englishFont justify-center rounded-2xl items-center p-2">
          <div className="flex justify-center items-center flex-col p-5">
          <img className=" w-full rounded-full shadow-lg overflow-hidden h-48 object-cover" src="./assets/advisor.jpg" alt="advisor" />
          <h4 >Khim Chamroeun</h4>
          </div>
        </div>
        {/* for teamwork */}
        <div >
          <h2 className=" text-2xl text-center font-dragon p-5 text-gray-100 md:text-5xl ">Our teammate</h2>
          <div className="grid font-englishFont grid-cols-1 rounded-2xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {teamwork.map((teamwork)=>(
              <div  key ={teamwork.id}>
              <div className="flex justify-center items-center flex-col p-5">
              <img className=" rounded-full shadow-lg overflow-hidden w-48 h-48 object-cover" src={teamwork.img} alt={teamwork.name} />
               <h3 className="text-gray-200">{teamwork.name}</h3>
               <p className="text-gray-300">{teamwork.part}</p>
              </div>
              </div>
            ) )}
          </div>
        </div>

      </div>

      {/* Creative Design Section */}
      <div className="max-w-screen-xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-indigo-400 mb-4 text-center">Creative Design</h2>
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <p className="text-lg leading-relaxed">
              At <span className="text-indigo-500 font-bold">Ream Legends</span>, we take pride in our attention to detail and the craftsmanship that goes into every element of our games. From the stunning visuals to the intuitive user interface, every aspect is thoughtfully designed to immerse players in a seamless and engaging experience.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img src="/assets/creative-design.jpg" alt="Creative Design" className="rounded-lg shadow-lg w-4/5"/>
          </div>
        </div>
      </div>
    </section>

    </div>
  )
}
