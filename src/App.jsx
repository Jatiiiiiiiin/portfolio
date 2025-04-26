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
    const projectsSection = useRef(null);
    const contactSection = useRef(null); // Added ref for contact section

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
            description: "Cookie Music is an innovative, user-focused, and ad-free music streaming application developed by Team Asterix as part of our second-year mini project assignment. The primary goal of this project was to create a seamless, interactive, and intuitive music experience for users, without relying on cloud services or advertisements. Instead, the app plays music from local files, ensuring that the experience is both personalized and fully accessible offline. The app features a sleek and modern dark theme that enhances the overall user experience, making it visually engaging. One of the key interactive elements is the timeline slide bar at the bottom of the screen, allowing users to effortlessly adjust and navigate through the music track. This feature provides greater control over playback and contributes to the app's user-friendly nature. Cookie Music was developed using HTML, CSS, and JavaScript, focusing on core web development skills and responsive design principles. Since this was an early-stage project, we chose not to integrate React, opting instead to build the functionality from the ground up, which provided valuable experience in pure front-end development. For user authentication, Firebase was integrated to handle login and signup processes securely, allowing users to save preferences and access their personalized music library. The authentication feature was carefully designed to ensure smooth and reliable user management, while maintaining the app's overall simplicity and performance. By combining creativity, technical expertise, and a focus on user experience, Cookie Music is a testament to our ability to build functional, interactive, and engaging web applications from the ground up, using modern technologies and best practices.",
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
        "slumini connect": {
            title: "Alumini Connect",
            description: "A networking platform for alumni to connect and share knowledge. It features real-time messaging and user profiles.",
            technologies: ["React", "Node.js", "Express", "MongoDB"],
            liveLink: "https://your-live-project-link.com",
            repoLink: "https://github.com/your-repo-link"
        },
        "flumini connect": {
            title: "Alumini Connect",
            description: "A networking platform for alumni to connect and share knowledge. It features real-time messaging and user profiles.",
            technologies: ["React", "Node.js", "Express", "MongoDB"],
            liveLink: "https://your-live-project-link.com",
            repoLink: "https://github.com/your-repo-link"
        },
    };

    return (
        <>
            <header className="header">
                <h1>JATIN THAKUR</h1>
                <nav className="tags">
                    {['work', 'about', 'services', 'contact'].map(section => (
                        <a key={section} href={`#${section}`} onClick={() => handleClick(section)}>{section.charAt(0).toUpperCase() + section.slice(1)}</a>
                    ))}
                </nav>
                <div className="cta">
                    <button onClick={scrollToContact}>Let's talk</button> {/* Updated onClick */}
                </div>
            </header>

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
                        <button onClick={scrollToContact}>Contact me</button> {/* Updated onClick */}
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
                        I'm a web developer in the making, currently a 3rd-year engineering student at ABES Institute of Technology (ABESIT). I’m passionate about creating clean, responsive websites that blend thoughtful design with strong technical foundations. web developer with a background in graphic design, passionate about building visually engaging and user-friendly websites. My approach combines design thinking with clean, responsive code to create digital experiences that are both beautiful and functional.
                    </p>
                    <p>
                        With a background in graphic design and a keen eye for aesthetics, I bring a unique perspective to front-end development. I’m actively building my skills in HTML, CSS, JavaScript, and frameworks like React, working on personal projects and collaborations to sharpen my abilities.
                    </p>
                    <DownloadButton />
                </div>
            </section>

            <section className="services" id="services">
                <Card head="Design" title="UI/UX Design" description="Creating user-centered designs that enhance usability and improve user experience." />
                <Card head="Development" title="Web Development" description="Building responsive and interactive websites using modern web technologies." />
                <Card head="Code" title="Coding" description="Good at C, C++" />
            </section>

            <section id="contact" ref={contactSection}> {/* Added ref here */}
                <Contact />
            </section>
        </>
    );
}

export default App;