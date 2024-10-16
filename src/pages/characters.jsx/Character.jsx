import React from 'react'
import AOS from 'aos';  // Correct: with uppercase 'AOS'
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Charater() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // You can customize this
      once: false, // Optional: whether animation should happen only once
    });
  }, []);
  const characters = [
    {
      id: 1,
      name: "Krong Reap",
      info_1:"Krong Reap, or Tusamuk, is the King of the yeak(or demons) who rules over the city of Langka on the island of Langka.",
      info: "Krong Reap is depicted as a yeak with green skin. Although he is described as having twenty arms. Krong Reap is generally painted as having four, six, eight or ten arms, all holding weapins used in battle such as the bow, spear, club, or trident. Krong Reap is said to have ten heads but he is usually painted with either a single large yeak face or with four faces(as shown here). Additional faces, both yeak and human, ae found on his headdress. Krong Reap here in a pose of guarding, confronting or setting out on a journey.",
      img: "./assets/Rama.jpg",
      img_line:"./assets/line.png"
    },
    {
      id: 2,
      name: "Preah Ream",
      info_1:"Preah Ream is the son of King Tusarot and his first Queen Kokolyan (Kaousurya). ",
      info: "The theft of Preah Ream is wife, Neang Seda, by the King of the yeak, Krong Reap, precipitates much of the action described in the Reamker, Preah Ream is depicted as a human being with green skin, wearing a “mokot neay roong” headdress. Preah Ream is considered to be an incarnation of Preah Neareay(Vishnu). Preah Ream is shown here in a pose of just having shot an arrow from his famous bow.",
      img: "./assets/Ravana.jpg",
      img_line:"./assets/line.png"
    },
    {
      id: 3,
      name: "Hanuman",
      info_1:"Hanuman is the nephew of Sugrib who becomes the strongest and cleverest monkey commander of Preah Ream. ",
      info: "Hanuman helps Preah Ream over and over again in the fight to reclaim Neang Seda. Hanuman is depicted as a white monkey with blue or grey lines representing his fur, from afar hanuman should look white, while up close one can see his fur markings Hanuman wears a “Kbang” headdress and is depicted here in a pose of walking, holding his sword.",
      img: "./assets/Ravana.jpg",
      img_line:"./assets/line.png"
    },
    {
      id: 4,
      name: "Preah Leak",
      info_1:"Preah Leak is the younger half brother of Preah Ream who fights at his side throughout the battles for Neang Seda. ",
      info: " His mother is Samotreadevi, the third Queen of the King Tusarot. Preak Leak is depicted with flesh colored skin, wearing a headdress called a “mokot neay roong”and holding a bow. He is shown here in a pose of traveling on a journey.",
      img: "./assets/Ravana.jpg",
      img_line:"./assets/line.png"
    },
    // {
    //   id: 3,
    //   name: "Character 3",
    //   info: "This is character 3's info.",
    //   img: "/assets/character3.jpg",
    // },
  ];
  return (
    <>
     <div className="ring-yellow-400 ring-offset-1 ring-offset-transparent mt-9 md:mt-12 mx-auto md:mx-20">
     {characters.map((character) => (
        <div
          key={character.id}
          className=" grid grid-cols-2 gap-3 xl:gap-10 p-4 rounded shadow-md text-center mx-1 md:mx-10 xl:mx-16 md:auto">
          <div
            className="relative w-full h-full rounded-md mb-4 flex items-center justify-center " // Flexbox to center image
             style={{
              backgroundImage: `url('./assets/frame.jpg')`, // Frame as background
             backgroundSize: 'cover',
              backgroundPosition: 'center',}}>
  <img src={character.img} data-aos="fade-up" data-aos-duration="1500" alt={character.name} className="object-cover rounded-md"
    style={{
      width: '92%', // Make the image smaller than the parent div
      height: '92%',
    }}
  />
    </div>
         <div className="font-englishFont">
         <h3 className="text-4xl md:text-5xl font-dragon text-gray-100" data-aos="fade-right"  data-aos-duration="1500">{character.name}</h3>
         <p className="text-sm md:text-md lg:text-lg xl:text-xl text-right text-gray-300" data-aos="fade-right" 
     data-aos-duration="1500">{character.info_1}</p>
         {/* <img src="./assets/line.png" alt="line" /> */}
         </div>
         <div className=" col-span-2 ">
         <p className="text-sm md:text-md lg:text-lg xl:text-xl text-right text-gray-300" data-aos="fade-right" 
     data-aos-duration="1500">{character.info}</p>
         </div>
         <div className=" col-span-2 ">
          <img src={character.img_line} className="mx-auto" alt="line"  />
         </div>
        </div>
        
      ))}  
      
    </div> 
    </>
  )
}
