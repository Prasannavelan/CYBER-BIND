import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Prepare the data to be sent
    const contactData = { name, email, message };

    try {
      const response = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData), // Send data as JSON
      });

      if (response.ok) {
        alert('Thank you for contacting us!'); // Success message
        // Reset the form
        setName('');
        setEmail('');
        setMessage('');
      } else {
        alert('Something went wrong. Please try again.'); // Error message
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error sending your message.'); // Catch error
    }
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Message:
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </label>
        <button type="submit">Send</button>
      </form>
      <div className="contact-info">
        <p>Email: <a href="mailto:cyberbind2024@gmail.com">cyberbind2024@gmail.com</a></p>
      </div>
      <div className="social-links">
        <a href="https://www.instagram.com/cyber_bind" target="_blank" rel="noopener noreferrer">Instagram</a> | 
        <a href="https://www.linkedin.com/in/cyber-bind" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </div>
  );
};

export default Contact;
