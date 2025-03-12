import React from "react";
import "./AboutUs.css";

import Header from "../../components/Header";
import { Footer } from "../../components/Footer";

const teamMembers = [
    {
        name: "Adam ",
        role: "Software Engineer",
        skills: ["Full-Stack Development", "Machine Learning", "Cloud Computing"],
    },
    {
        name: "Ahmed ",
        role: "Hardware Engineer",
        skills: ["Embedded Systems", "PCB Design", "IoT Development"],
    },
    {
        name: "Muthana ",
        role: "Software Engineer",
        skills: ["Neural Networks", "Data Science", "Algorithm Optimization"],
    },
    {
        name: "Ahmed ",
        role: "Software Engineer",
        skills: ["Project Management", "UI/UX Design", "Business Strategy"],
    },
    {
        name: "Ibrahim ",
        role: "Computer Engineer",
        skills: ["Project Management", "UI/UX Design", "Business Strategy"],
    },
  ];

const AboutUs = () => {
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

            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
                {teamMembers.map((member, index) => (
                <div key={index} style={{ backgroundColor: "#2a2a2a", padding: "20px", borderRadius: "10px", width: "280px", textAlign: "center" }}>
                    <h3 style={{ margin: "0", fontSize: "22px" }}>{member.name}</h3>
                    <p style={{ fontSize: "16px", color: "#bbbbbb" }}>{member.role}</p>
                    <h4 style={{ marginTop: "10px", fontSize: "18px" }}>Skills</h4>
                    <ul style={{ listStyleType: "none", padding: 0 }}>
                    {member.skills.map((skill, i) => (
                        <li key={i} style={{ fontSize: "14px", color: "#cccccc" }}>{skill}</li>
                    ))}
                    </ul>
                </div>
                ))}
            </div>
        </div>
        <Footer/>
    </>
  );
};

export default AboutUs;
