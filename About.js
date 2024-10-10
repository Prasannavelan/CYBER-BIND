// src/components/About.js
import React from 'react';
import './About.css'; // Create this CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        CYBER BIND, established on October 8, 2024, is dedicated to bridging the gap 
        between aspiring students and the professional world through affordable online 
        virtual internships. We provide high-quality freelancing services to clients, 
        ensuring reliability and excellence in every project.
      </p>
      <p>
        We are proud to be registered with the Ministry of Micro, Small, and Medium Enterprises (MSME), 
        affirming our commitment to supporting students and clients with top-notch services.
      </p>
      <h2>Our Vision</h2>
      <p>
        To empower individuals with the skills and opportunities needed to excel in the 
        digital world, fostering a community of innovation and excellence.
      </p>
      <h2>Our Mission</h2>
      <p>
        To provide comprehensive training and professional services that bridge the gap 
        between education and industry, enabling students to gain practical experience and 
        clients to receive high-quality freelancing solutions.
      </p>
      <h2>Our Founder</h2>
      <p>
        The founder of CYBER BIND is <strong>PRASANNA VELAN V</strong>, who has a vision 
        for creating accessible and affordable internships for all students.
      </p>
      <h2>Our Process</h2>
      <ul>
        <li>Registration</li>
        <li>Selection</li>
        <li>Onboarding</li>
        <li>Execution</li>
        <li>Feedback</li>
      </ul>
    </div>
  );
};

export default About;
