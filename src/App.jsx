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
            description: "Cookie Music is an innovative, user-focused, and ad-free music streaming application developed by Team Asterix...",
            technologies: ["HTML", "CSS", "JavaScript", "Firebase"],
            liveLink: "https://your-live-project-link.com",
            repoLink: "https://github.com/your-repo-link"
        },
        "alumini connect": {
            title: "Alumini Connect",
            description: "A networking platform for alumni to connect and share knowledge. It features real-time messaging and user profiles.",
            technologies: ["React", "Node.js", "Express", "MongoDB"],
            liveLink: "https://your-live-project-link.com",
            repoLink: "https://github.com/your-repo-link"
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

            {/* Main header */}
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
                        I'm a web developer in the making, currently a 3rd-year engineering student at ABES Institute of Technology (ABESIT)...
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
