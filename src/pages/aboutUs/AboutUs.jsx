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
      img:"./assets/soum.jpg",
      part: "(System)",
      info:"A student from ITE T407, RUPP",
    },
    {
      id: 4,
      name:"Rou Kimsean",
      img:"./assets/zean.jpg",
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
      
    </section>

    </div>
  )
}
