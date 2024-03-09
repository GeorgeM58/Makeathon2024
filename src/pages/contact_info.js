import React from 'react';
import Layout from '@theme/Layout';

export default function ContactInfoPage() {
  const containerStyles = {
    textAlign: 'center',
    padding: '2rem',
    backgroundColor: '#F2F2F2',
    borderRadius: '4px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    margin: '0 auto',
    color: '#333',
  };

  const headingStyles = {
    color: '#333',
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
  };

  const contactStyles = {
    fontSize: '1.2rem',
    color: '#555',
    marginBottom: '0.5rem',
  };

  return (
    <Layout>
      <div style={containerStyles}>
        <h1 style={headingStyles}>Contact Information</h1>
        <p style={contactStyles}>
          Email: <a href="mailto:gpm58@cornell.edu">gpm58@cornell.edu</a>
        </p>
        <p style={contactStyles}>
          LinkedIn: <a href="https://www.linkedin.com/in/george-maidhof-70ab13249/">George Maidhof</a>
        </p>
        <p style={contactStyles}>
          Instagram: <a href="https://www.instagram.com/georgemaidhof/">@georgemaidhof</a>
        </p>
        <p style={contactStyles}>
          Strava: <a href="https://www.strava.com/dashboard">George Maidhof</a>
        </p>
        {/* Add more contact information as needed */}
      </div>
    </Layout>
  );
}