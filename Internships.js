// src/components/Internships.js
import React from 'react';
import './Internships.css';

const internships = [
  {
    title: 'Artificial Intelligence',
    description: 'Gain hands-on experience in AI  technologies.',
    link: 'https://forms.gle/MX7fGodegebLrCEB8', // Replace with actual link
  },
 
  {
    title: 'C Programming',
    description: 'Enhance your C programming skills with real-world projects.',
    link: 'https://forms.gle/MX7fGodegebLrCEB8',
  },
  {
    title: 'C++ Programming',
    description: 'Master C++ programming through comprehensive internships.',
    link: 'https://forms.gle/MX7fGodegebLrCEB8',
  },
  {
    title: 'Java Development',
    description: 'Develop robust Java applications and frameworks.',
    link: 'https://forms.gle/MX7fGodegebLrCEB8',
  },
  {
    title: 'Machine Learning',
    description: 'Gain hands-on experience in Machine Learning technologies.',
    link: 'https://forms.gle/MX7fGodegebLrCEB8', // Replace with actual link
  },
  {
    title: 'Mobile App Development',
    description: 'Create innovative mobile applications for Android and iOS.',
    link: 'https://forms.gle/MX7fGodegebLrCEB8',
  },
  {
    title: 'Python Development',
    description: 'Build powerful Python applications and scripts.',
    link: 'https://forms.gle/MX7fGodegebLrCEB8',
  },
  {
    title: 'UI/UX Design',
    description: 'Design user-centric interfaces and experiences.',
    link: 'https://forms.gle/MX7fGodegebLrCEB8',
  },
  {
    title: 'Web Application Development',
    description: 'Develop scalable and efficient web applications.',
    link: 'https://forms.gle/MX7fGodegebLrCEB8',
  },
  {
    title: 'Web Development',
    description: 'Learn full-stack web development technologies.',
    link: 'https://forms.gle/MX7fGodegebLrCEB8',
  },
];

const Internships = () => {
  return (
    <div className="internships-container">
      <h2>Internships Offered</h2>
      <div className="internship-grid">
        {internships.map((internship, index) => (
          <div className="internship-card" key={index}>
            <h3>{internship.title}</h3>
            <p>{internship.description}</p>
            <a href={internship.link} target="_blank" rel="noopener noreferrer" className="apply-button">Apply</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Internships;
