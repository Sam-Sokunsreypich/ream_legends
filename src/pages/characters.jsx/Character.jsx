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
      name: "Rama",
      info: "Rama is a central figure in Hindu mythology, revered as the seventh avatar of the god Vishnu. He embodies the ideal of dharma (righteousness) and is often depicted as a heroic prince who undertakes a perilous journey to rescue his wife, Sita, from the demon king Ravana. His story is primarily told in the ancient epic, the Ramayana, where his virtues, bravery, and commitment to justice are highlighted. Rama is also celebrated for his compassion, integrity, and devotion to family, making him a symbol of virtue and morality in Indian culture.",
      img: "./assets/Rama.jpg",
    },
    {
      id: 2,
      name: "Ravana",
      info: "Ravana is a prominent antagonist in Hindu mythology, particularly in the epic Ramayana. He is depicted as the ten-headed demon king of Lanka, known for his immense power, intelligence, and mastery of the arts and sciences. Despite his formidable strengths, including his prowess in battle and devotion to Shiva, Ravana's arrogance and desire for power lead him to abduct Sita, Rama's wife, igniting a fierce conflict. His complex character embodies both villainy and tragic flaws, making him a symbol of unchecked ambition and desire, as well as a deeply nuanced figure in the narrative.",
      img: "./assets/Ravana.jpg",
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
     <div className="ring-yellow-400 ring-offset-1 ring-offset-transparent mt-9 md:mt-12 mx-auto">
     {characters.map((character) => (
        <div
          key={character.id}
          className=" grid md:grid-cols-2 gap-4 p-4 rounded-lg shadow-md text-center mx-10 md:auto"
        >
          <div
            className="relative w-auto h-full rounded-md mb-4 flex items-center justify-center p-2" // Flexbox to center image
             style={{
              backgroundImage: `url('./assets/frame.jpg')`, // Frame as background
             backgroundSize: 'cover',
              backgroundPosition: 'center',
             }}>
  <img
    src={character.img} data-aos="fade-up" 
     data-aos-duration="1500"
    alt={character.name}
    className="object-cover rounded-md"
    style={{
      width: '95%', // Make the image smaller than the parent div
      height: '95%',
    }}
  />
</div>


         <div>
         <h3 className="text-lg font-bold text-gray-100" data-aos="fade-right"  data-aos-duration="1500">{character.name}</h3>
         <p className="text-sm  text-gray-100" data-aos="fade-right" 
     data-aos-duration="1500">{character.info}</p>
         <img src="./assets/line.png" alt="line" />
         </div>
        </div>
      ))}  
      
    </div> 
    </>
  )
}
