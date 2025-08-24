import React from 'react'
import './Tech.css'
import ReactIcon from '../assets/atom.png'
import htmlicon from '../assets/html.png'
import css from '../assets/text.png'
import js from '../assets/js.png'
import firebase from '../assets/database.png'
import node from '../assets/node-js.png'
import images from '../assets/images.png'
import github from '../assets/github.png'
import git from '../assets/social.png'
import bootstrap from '../assets/bootstrap.png'
import tailwind from '../assets/coding.png'
import figma from '../assets/figma.png'

function Tech() {
  let Buttondata = [
    { name: 'HTML', img: htmlicon },
    { name: 'CSS', img: css },
    { name: 'JavaScript', img: js },
    { name: 'ReactJS', img: ReactIcon },
    { name: 'NodeJS', img: node },
    { name: 'ExpressJS', img: images },
    { name: 'Firebase', img: firebase },
    { name: 'Git', img: git },
    { name: 'GitHub', img: github },
    { name: 'Bootstrap', img: bootstrap },
    { name: 'TailwindCSS', img: tailwind },
    { name: 'Figma', img: figma },
  ];

  // Duplicate the array to create continuous scroll
  const loopData = [...Buttondata, ...Buttondata];

  return (
    <div className="marquee-container">
      <div className="marquee">
        {loopData.map((item, index) => (
          <button
            key={index}
            className={`tech-button ${index === Buttondata.length - 1 ? 'with-gap' : ''}`}
          >
            <img src={item.img} alt={item.name} className="tech-icon" />
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Tech;
