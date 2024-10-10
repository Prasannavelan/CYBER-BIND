const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Create transporter object for Nodemailer
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
      user: 'cyberbind2024@gmail.com',
      pass: 'eyce jqme rvdx eoiz',
  },
  tls: {
      rejectUnauthorized: false // Allow self-signed certificates
  },
  logger: true, // Log output
  debug: true // Show debug output
});



// POST route for /contact
app.post('/contact', (req, res) => {
    const { name, email, message } = req.body; // Extract data from the request body

    // Email options
    const mailOptions = {
        from: email,
        to: 'cyberbind2024@gmail.com', // Your email to receive the notifications
        subject: 'New Contact Form Submission',
        text: `You have a new contact form submission from:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error); // Log error for debugging
            return res.status(500).send(`Error occurred while sending email: ${error.message}`); // Send detailed error message
        }
        console.log('Email sent:', info.response);
        res.status(200).send('Thank you for contacting us!'); // Send a success message back to the client
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
