// src/components/FreelancingServices.js
import React from 'react';
import './FreelancingServices.css';

const services = [
  {
    title: 'Website Development',
    description: 'Professional websites tailored to your business needs.',
    link: 'https://forms.gle/FPUvH5asRAZbELKJ9', // Replace with actual link
  },
  {
    title: 'App Development',
    description: 'Custom mobile applications for Android and iOS platforms.',
    link: 'https://forms.gle/FPUvH5asRAZbELKJ9',
  },
  {
    title: 'Logo and Watermark Creation',
    description: 'Unique and memorable logos and watermarks for your brand.',
    link: 'https://forms.gle/FPUvH5asRAZbELKJ9',
  },
  
  {
    title: 'Shorts and Reels Video Editing',
    description: 'Engaging video editing services for social media content.',
    link: 'https://forms.gle/FPUvH5asRAZbELKJ9',
  },
  {
    title: 'Resume Building',
    description: 'Craft professional resumes that stand out to employers.',
    link: 'https://forms.gle/FPUvH5asRAZbELKJ9',
  },
  {
    title: 'Photo Enhancing',
    description: 'High-quality photo editing and enhancing services.',
    link: 'https://forms.gle/FPUvH5asRAZbELKJ9',
  },
  {
    title: 'Video Quality Enhancing',
    description: 'Improve the quality of your videos with our enhancing services.',
    link: 'https://forms.gle/FPUvH5asRAZbELKJ9',
  },
];

const FreelancingServices = () => {
  return (
    <div className="services-container">
      <h2>Freelancing Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a href={service.link} target="_blank" rel="noopener noreferrer" className="apply-button">Apply</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FreelancingServices;
