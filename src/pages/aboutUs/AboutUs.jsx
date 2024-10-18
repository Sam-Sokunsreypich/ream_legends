import React from 'react'

export default function AboutUs() {
  const teamwork=[
    {
      id: 1,
      name:"Dom Hiroshi",
      img:"./assets/hiroshi.jpg",
      part: "(System)",
      info:"A student from ITE T407, RUPP",
    },
    {
      id: 2,
      name:"Veth Somnang",
      img:"./assets/nang.jpg",
      part: "(Designer)",
      info:"A student from ITE T407, RUPP",
    },
    {
      id: 3,
      name:"Dao sit soum",
      img:"./assets/Ravana.jpg",
      part: "(System)",
      info:"A student from ITE T407, RUPP",
    },
    {
      id: 4,
      name:"Rou Kimsean",
      img:"./assets/Rama.jpg",
      part: "(Assistant Designer)",
      info:"A student from ITE T407, RUPP",
    },
    {
      id: 5,
      name:"Sam Sokunsreypich",
      img:"./assets/pich.JPG",
      part: "(Web Design)",
      info:"A student from ITE T407, RUPP",
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
      <div className="bg-blue-500 mx-4 md:mx-12 my-7 md:my-12 p-5 rounded-2xl">
        {/* for advisor */}
        <h2 className="font-bold text-3xl text-center p-6 text-gray-100 md:text-5xl ">Advisor</h2>
        <div className="flex flex-row md:justify-center md:items-center font-englishFont p-2 ">
          <img className="rounded-full shadow-lg overflow-hidden h-40 min-w-40 object-cover" src="./assets/advisor.jpg" alt="advisor" />
      <div className="text-right">
        <h4 className="font-bold">Khim Chamroeun</h4>
        <h2>(advisor)</h2>
      </div>
    </div>

        {/* for teamwork */}
        <div >
          <h2 className=" text-3xl text-center font-bold mt-5 text-gray-100 md:text-5xl p-2">Our Teammate</h2>
          <div className="grid font-englishFont grid-cols-1 rounded-2xl md:grid-cols-2 md:gap-8 ">
            {teamwork.map((teamwork)=>(
              <div  key ={teamwork.id}>
              <div className={`flex pt-5 ${
          teamwork.id % 2 === 0 ? "flex-row" : "flex-row-reverse"
        }`}>
              <img className=" rounded-full shadow-lg  overflow-hidden min-w-40 h-40 object-cover" src={teamwork.img} alt={teamwork.name} />
           <div className={`mt-3 ${
          teamwork.id % 2 === 0 ? "text-right" : "text-left"
        }`}>
           <h3 className="text-gray-200 font-bold">{teamwork.name}</h3>
           <p className="text-gray-300">{teamwork.part}</p>
           <small className="text-gray-200">{teamwork.info}</small>
           </div>
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
               <span className="text-indigo-500 font-bold">Ream Legends</span>, we take pride in our attention to detail and the craftsmanship that goes into every element of our games. From the stunning visuals to the intuitive user interface, every aspect is thoughtfully designed to immerse players in a seamless and engaging experience.
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
