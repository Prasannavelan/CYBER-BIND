// src/components/Home.js
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to CYBER BIND</h1>
          <p>Your gateway to affordable virtual internships and professional freelancing services.</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="overview-section">
        <div className="section-content">
          <h2>Company Overview</h2>
          <p>
            At CYBER BIND, we are committed to bridging the gap between aspiring students and the professional world. 
            We offer affordable online virtual internships that equip students with the necessary skills and experiences 
            to excel in their chosen fields. Additionally, our freelancing services provide clients with top-notch solutions 
            tailored to their business needs, ensuring quality and reliability in every project we undertake.
          </p>
        </div>
      </section>

      {/* Vision and Mission */}
      <section className="vision-mission-section">
        <div className="vision">
          <h3>Our Vision</h3>
          <p>
            To empower the next generation of professionals by providing accessible and high-quality virtual internships, 
            while delivering exceptional freelancing services that drive business success.
          </p>
        </div>
        <div className="mission">
          <h3>Our Mission</h3>
          <p>
            To offer cost-effective virtual internship programs that enhance students' skills and employability, 
            and to deliver reliable and innovative freelancing services that meet and exceed our clients' expectations.
          </p>
        </div>
      </section>

      {/* Detailed Description */}
      <section className="description-section">
        <div className="section-content">
          <h2>About CYBER BIND</h2>
          <p>
            CYBER BIND is dedicated to fostering the growth and development of students through our comprehensive 
            virtual internship programs. We understand the challenges faced by students in accessing quality 
            internship opportunities, which is why we provide affordable and flexible online internships that cater 
            to various domains such as Artificial Intelligence, Web Development, UI/UX Design, and more.
          </p>
          <p>
        We are proud to be registered with the Ministry of Micro, Small, and Medium Enterprises (MSME), 
        affirming our commitment to supporting students and clients with top-notch services.
      </p>
          <p>
            For our clients, CYBER BIND offers a wide range of freelancing services designed to meet diverse business 
            needs. Whether you're looking to develop a cutting-edge website, create engaging video content, or enhance 
            your brand's visual identity, our team of skilled professionals is here to help you achieve your goals 
            efficiently and effectively.
          </p>
        </div>
      </section>

      {/* Our Process */}
      <section className="process-section">
        <div className="section-content">
          <h2>Our Process</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4>Consultation</h4>
                <p>
                  We begin by understanding your needs and objectives, whether you're a student seeking an internship 
                  or a client requiring freelancing services.
                </p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4>Matching</h4>
                <p>
                  For internships, we match students with suitable projects based on their skills and interests. 
                  For clients, we assign the best professionals to handle your projects efficiently.
                </p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h4>Execution</h4>
                <p>
                  Our team works diligently to execute the tasks, ensuring quality and timely delivery for all projects.
                </p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h4>Feedback & Support</h4>
                <p>
                  We provide continuous support and gather feedback to improve our services and ensure satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Details */}
      <section className="contact-section">
      <div className="section-content">
  <h2>Contact Us</h2>
  <p>Email: <a href="mailto:contact@cyberbind.com">cyberbind2024@gmail.com</a></p>
  <p>Follow us on:</p>
  <p>
    <a href="https://www.instagram.com/cyber_bind" target="_blank" rel="noopener noreferrer">Instagram</a> | 
    <a href="https://www.linkedin.com/in/cyber-bind" target="_blank" rel="noopener noreferrer">LinkedIn</a>
  </p>
</div>

      </section>
    </div>
  );
};

export default Home;
