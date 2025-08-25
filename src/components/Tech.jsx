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

  let platform = [
    { name: 'Canva', img: 'https://img.icons8.com/color/48/canva.png' },
    { name: 'ChatGPT', img: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg' },
    { name: 'VS Code', img: 'https://img.icons8.com/color/48/visual-studio-code-2019.png' },
    { name: 'Postman', img: 'https://img.icons8.com/dusk/64/postman-api.png' },
    { name: 'Slack', img: 'https://img.icons8.com/color/48/slack-new.png' },
    { name: 'Notion', img: 'https://img.icons8.com/ios-filled/50/notion.png' },
    { name: 'Google Drive', img: 'https://img.icons8.com/color/48/google-drive--v2.png' },
    { name: 'vercel', img: 'https://img.icons8.com/ios-filled/50/vercel.png' },
    { name: 'Figma', img: 'https://img.icons8.com/color/48/figma--v1.png' },

  ]

  // Duplicate the array to create continuous scroll
  const loopData = [...Buttondata, ...Buttondata];
  const platData = [...platform, ...platform]

  return (
    <div className="marquee-container">
      <div className="marquee">
        {loopData.map((item, index) => (
          <button
            key={index}
            className={`tech-button ${index === platform.length - 1 ? 'with-gap' : ''}`}
          >
            <img src={item.img} alt={item.name} className="tech-icon" />
            {item.name}
          </button>
        ))}
      </div>
      <br />
      <div className="marquee1">
        {platData.map((item, index) => (
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
