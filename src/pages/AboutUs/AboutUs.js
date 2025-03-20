import React, { useState, useEffect, useRef } from "react";
import "./AboutUs.css";

import { FaLaptopCode, FaMicrochip, FaCode } from "react-icons/fa";
import { MdMemory, MdComputer } from "react-icons/md";
import { GiCircuitry } from "react-icons/gi";
import { AiOutlineTool, AiOutlineClose } from "react-icons/ai";

import Header from "../../components/Header";
import { Footer } from "../../components/Footer";

const teamMembers = [
    {
        name: "Adam ",
        role: "Software Engineer",
        icon: <FaLaptopCode />,
        image: "Adam.jpg",
        resume: "Adam_Elmongy_Resume.pdf",
        skills: ["Software Development", "Machine Learning", "Cloud Computing"],
    },
    {
        name: "Ahmed A",
        role: "Hardware Engineer",
        icon: <FaMicrochip />,
        image: "Ahmed.jpg",
        resume: "Ahmed_Abdelhalim_Resume_2025.pdf",
        skills: ["Embedded Systems", "PCB Design", "IoT Development"],
    },
    {
        name: "Muthana ",
        role: "Software Engineer",
        icon: <FaLaptopCode />,
        image: "Muthana.jpg",
        resume: "MuthanaAlhabian_Resume.pdf",
        skills: ["Software Development", "Data Science", "Algorithm Optimization"],
    },
    {
        name: "Ahmed S",
        role: "Software Engineer",
        icon: <FaLaptopCode />,
        image: "Sabrah.jpg",
        resume: "MuthanaAlhabian_Resume.pdf",
        skills: ["Software Development", "UI/UX Design", "Business Strategy"],
    },
    {
        name: "Ibrahim ",
        role: "Computer Engineer",
        icon: <MdComputer />,
        image: "Atiq.jpg",
        resume: "IbrahimAtiq_Resume.pdf",
        skills: ["Software Development", "Hardware Design", "Business Strategy"],
    },
];

const AboutUs = () => {
  const [selectedResume, setSelectedResume] = useState(null);
  const resumeRef = useRef(null);

  useEffect(() => {
    if (selectedResume) {
      resumeRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedResume]); // Runs every time selectedResume is updated

  const handleResumeClick = (resume) => {
    setSelectedResume(resume);
  };

  return (
    <>
        <Header/>
        <div className="about-container">
            <h1 className="about-title">About Us</h1>
            <p className="about-text">
                Welcome to our platform! We are passionate about creating innovative 
                solutions that connect people with the right resources to succeed. 
                Our mission is to bridge the gap between knowledge and opportunity 
                by leveraging technology to provide seamless experiences.
            </p>

            <div className="about-grid">
                <div className="about-card">
                <h3>Our Mission</h3>
                <p>
                    To aid investors with accessible, high-quality career 
                    guidance and mentorship through technology.
                </p>
                </div>
                <div className="about-card">
                <h3>Our Vision</h3>
                <p>
                    A world where everyone has equal access to career opportunities 
                    and expert mentorship, regardless of their background.
                </p>
                </div>
                <div className="about-card">
                    <h3>Our Values</h3>
                    <p>
                        Integrity, innovation, inclusivity, and impact. We believe in 
                        making meaningful changes through ethical and forward-thinking solutions.
                    </p>
                </div>
            </div>

            <h2 style={{ textAlign: "center", fontSize: "44px", margin: "50px 0 40px" }}>Meet the Team</h2>

            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }} clasName="team-grid">
                {teamMembers.map((member, index) => (
                    <div className="team-wrapper">
                      <div key={index} className="flip-card">
                        <div className="card-inner">
                          {/* Front Side */}
                          <div className="card-front">
                                <img src={require(`../../assets/${member.image}`)} alt={member.name} className="team-image" />
                                <div className="card-content">
                                    <h3>{member.name}</h3>
                                    <p>{member.role} {member.icon}</p>
                                </div>
                            </div>
          
                          {/* Back Side */}
                          <div className="card-back">
                                <h3>Skills</h3>
                                <ul>
                                {member.skills.map((skill, i) => (
                                    <li key={i}>{skill}</li>
                                ))}
                                </ul>
                                <button 
                                    className="resume-button" 
                                    onClick={() => handleResumeClick(member.resume)}
                                >
                                    View Resume
                                </button>
                          </div>
                        </div>
                      </div>
                  </div>
                ))}
            </div>

            {/* Resume Viewer */}
            {selectedResume && (
                <div ref={resumeRef} className="resume-viewer">
                        <div style={{ textAlign: "center" }} className="resume-header">
                            <h2>Resume Preview</h2>
                            <button className="close-button" onClick={() => setSelectedResume(null)}>
                                <AiOutlineClose />
                            </button>
                        </div>
                        <object
                            data={require(`../../assets/resumes/${selectedResume}`)}
                            type="application/pdf"
                            className="resume-embed"
                        >
                            <p>Unable to display PDF. <a href={require(`../../assets/resumes/${selectedResume}`)} download>Download it here</a></p>
                        </object>
                    </div>
            )}
        </div>
        <Footer/>
    </>
  );
};

export default AboutUs;
