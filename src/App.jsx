import React, { useState, useRef } from 'react';
import './App.css';
import myImage from './assets/alumini.png';
import image from './assets/miniprojectimg.png';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import jatinImage from './assets/jatin.jpg';
import DownloadButton from './components/DownloadButton';
import Card from './components/Card';
import Contact from './components/Contact';


function App() {
    const [activeSection, setActiveSection] = useState('');
    const [selectedProject, setSelectedProject] = useState(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);  // Sidebar state
    const projectsSection = useRef(null);
    const contactSection = useRef(null);

    const [text] = useTypewriter({
        words: [
            "I am a full-stack developer",
            "or maybe a React Developer",
            "or maybe a UI/UX Developer",
            "mmmm... most probably a student"
        ],
        loop: 0,
        delaySpeed: 2000,
        typeSpeed: 100,
        deleteSpeed: 50,
    });

    const handleClick = (section) => {
        setActiveSection(section);
        setSelectedProject(null);
        setIsSidebarOpen(false); // Close sidebar on section change
    };

    const handleProjectClick = (project) => {
        setSelectedProject(project);
    };

    const scrollToProjects = () => {
        if (projectsSection.current) {
            projectsSection.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const scrollToContact = () => {
        if (contactSection.current) {
            contactSection.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const projectData = {
        "cookie music": {
            title: "Cookie Music",
            description: `💿 Cookie Music
Team: Asterix
Tech Stack: HTML, CSS, JavaScript, Firebase Authentication
Project Type: Second-Year Mini Project
Role: Front-End Developer / Team Member

Description:
Cookie Music is a seamless, ad-free, and user-interactive music streaming web application developed as part of a college mini project. Designed with a dark theme and clean UI, the app plays music directly from locally stored files without relying on any cloud-based services, ensuring fast and offline-compatible playback.

Key features include a dynamic slide bar for adjusting the playback timeline, a sleek user interface optimized for user experience, and Firebase Authentication for secure login and signup functionality. The app was built entirely using core web technologies—HTML, CSS, and JavaScript—without React, focusing on hands-on fundamentals and pure DOM manipulation.

This project emphasized user experience, performance, and team collaboration, and laid the foundation for deeper understanding of client-side architecture and real-time user authentication.

Features:

Ad-free and smooth music playback from local files

Interactive music timeline slider

Fully responsive dark-themed UI

Firebase-based user authentication (login/signup)

Built using core front-end technologies without frameworks`,
            technologies: ["HTML", "CSS", "JavaScript", "Firebase"],
            liveLink: "https://cookiemusic.vercel.app/",
            repoLink: "https://github.com/Jatiiiiiiiin/cookiemusic"
        },
        "alumini connect": {
            title: "Alumini Connect",
            description: "A networking platform for alumni to connect and share knowledge. It features real-time messaging and user profiles.",
            technologies: ["React", "Node.js", "Express", "MongoDB"],
            liveLink: "https://your-live-project-link.com",
            repoLink: "https://github.com/Jatiiiiiiiin/alumnii"
        },
        "Pokemon Explorer": {
            title: "Pokemon Explorer",
            description: `
This is a fully functional Pokedex web application built using React.js and powered by the PokeAPI. 
The app provides an interactive and dynamic way to explore Pokemon, view their stats, and manage personal preferences.

Key Features:

- Live Search Functionality:
  A real-time search bar allows users to quickly find any Pokemon by name.

- Pokemon Details View:
  Clicking on a Pokemon card reveals a detailed view showing all major stats such as HP, Attack, Defense, Speed, and other power levels.

- Add to Favorites:
  Users can mark Pokemon as favorites for quick access. Favorites are saved using local storage or React state.

- Compare Pokemon:
  A dedicated feature that lets users compare two or more Pokemon side by side based on their power levels and stats.

- Responsive Design:
  The app is fully responsive and optimized for desktop, tablet, and mobile devices.

Technologies Used:
- React.js
- PokeAPI
- CSS / Styled Components
- React Router (if used)
- Context API or Redux (if used)
`,
            liveLink: "https://pokemon-explorer-jatiiiiin.vercel.app/",
            repoLink: "https://github.com/Jatiiiiiiiin/pokemon-explorer"
        },
        "LOOVO - shopping website": {
            title: "LOOVO - shopping website",
            description: `LOOVO is a modern, full-featured e-commerce web application designed for a smooth and secure online shopping experience. Built using ReactJS and Firebase, the platform supports user authentication, product browsing, cart management, address saving, and order placement with real-time database updates.

Core Features:

🛒 Add to Cart & Wishlist: Users can add, view, and remove products in a persistent cart powered by Firestore.

👤 Authentication: Secure login/signup using Firebase Auth.

🧾 Order Summary & Confirmation: Before placing an order, users can view a detailed summary and confirm with saved address.

📦 Address Management: Users can save and update their shipping address, which is then used for order delivery.

✅ Order Placement & Confirmation Page: A confirmation page displays the user's name and order details upon successful checkout.

🔄 Real-Time Sync: Cart and order data are synced live using Firestore’s onSnapshot.

Tech Stack:

Frontend: ReactJS, CSS

Backend: Firebase (Firestore, Auth)

Routing: React Router

State Management: React Context API

Special Highlights:

Real-time updates for cart and order data.

Clean and responsive UI for all screen sizes.

Modular component structure for maintainability.`,
            liveLink: "https://loovo.vercel.app/",
            repoLink: "https://github.com/Jatiiiiiiiin/loovo"
        },

    };

    return (
        <>
            {/* Sidebar for mobile view */}
            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <button className="close-btn" onClick={() => setIsSidebarOpen(false)}>X</button>
                <nav>
                    {['work', 'about', 'services', 'contact'].map(section => (
                        <a key={section} href={`#${section}`} onClick={() => handleClick(section)}>{section.charAt(0).toUpperCase() + section.slice(1)}</a>
                    ))}
                </nav>
            </div>

            <header className="header">
                <h1>JATIN THAKUR</h1>
                <button className="hamburger" onClick={() => setIsSidebarOpen(true)}>☰</button>
                <nav className="tags">
                    {['work', 'about', 'services', 'contact'].map(section => (
                        <a key={section} href={`#${section}`} onClick={() => handleClick(section)}>{section.charAt(0).toUpperCase() + section.slice(1)}</a>
                    ))}
                </nav>
                <div className="cta">
                    <button onClick={scrollToContact}>Let's talk</button>
                </div>
            </header>

            {/* Main content */}
            <main className="content">
                <section className="left">
                    {activeSection === '' && (
                        <div>
                            <h1>
                                <span style={{ fontWeight: "bold", color: "black" }}>
                                    {text}
                                </span>
                                <Cursor />
                            </h1>
                            <h2>Transforming ideas into visual stories that captivate and inspire. Based in New York.</h2>
                        </div>
                    )}
                    {activeSection && (
                        <div>
                            <h1>{activeSection.charAt(0).toUpperCase() + activeSection.slice(1)} Section</h1>
                            <h2>Here are some of the projects I've worked on...</h2>
                        </div>
                    )}
                    <div className="buttons">
                        <button onClick={scrollToProjects}>View my work</button>
                        <button onClick={scrollToContact}>Contact me</button>
                    </div>
                </section>

                <section className="right">
                    <img src={jatinImage} alt="Jatin" />
                </section>
            </main>

            <div className="projects" id="work" ref={projectsSection}>
                <h1>Featured Works</h1>
                {!selectedProject ? (
                    Object.keys(projectData).map((projectName, idx) => (
                        <div key={idx} className="l1" onClick={() => handleProjectClick(projectName)}>
                            <img src={idx % 2 === 0 ? image : myImage} alt={projectName} />
                            <p>{projectData[projectName].title}</p>
                        </div>
                    ))
                ) : (
                    <div className="project-detail">
                        <h2>{projectData[selectedProject].title}</h2>
                        <p>{projectData[selectedProject].description}</p>
                        <h3>Technologies Used:</h3>
                        <ul>
                            {projectData[selectedProject].technologies.map((tech, idx) => (
                                <li key={idx}>{tech}</li>
                            ))}
                        </ul>
                        {projectData[selectedProject].liveLink && (
                            <a href={projectData[selectedProject].liveLink} target="_blank" rel="noopenernoreferrer">
                                Live Project
                            </a>
                        )}
                        {projectData[selectedProject].repoLink && (
                            <a href={projectData[selectedProject].repoLink} target="_blank" rel="noopenernoreferrer">
                                View Repository
                            </a>
                        )}
                        <div>
                            <button onClick={() => setSelectedProject(null)}>Back to Projects</button>
                        </div>
                    </div>
                )}
            </div>

            <section className="about-section" id="about">
                <div className="about-left">
                    <img src={jatinImage} alt="Profile" />
                </div>
                <div className="about-right">
                    <h1>About Me</h1>
                    <p>
                        I'm a web developer in the making, currently a 3rd-year engineering student at ABES Institute of Technology (ABESIT). I have a passion for creating beautiful and functional web applications. My journey in web development has been fueled by a desire to learn and grow, and I'm excited to take on new challenges. I have experience in both front-end and back-end development, and I'm always eager to expand my skill set. I believe in the power of collaboration and am always open to working with others to create something amazing.<br /> Let's connect and see how we can work together!
                    </p>
                    <DownloadButton />
                </div>
            </section>

            <section className="services" id="services">
                <Card head="Design" title="UI/UX Design" description="Creating user-centered designs that enhance usability and improve user experience." />
                <Card head="Development" title="Web Development" description="Building responsive and interactive websites using modern web technologies." />
                <Card head="Code" title="Coding" description="Good at C, C++" />
            </section>

            <section id="contact" ref={contactSection}>
                <Contact />
            </section>
        </>
    );
}

export default App;

