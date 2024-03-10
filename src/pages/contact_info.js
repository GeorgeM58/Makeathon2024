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
          Email: George Maidhof <a href="mailto:gpm58@cornell.edu">gpm58@cornell.edu</a>
        </p>
        <p style={contactStyles}>
          Email: Kaitlyn Beiler <a href="mailto:keb282@cornell.edu">keb282@cornell.edu</a>        </p>
        <p style={contactStyles}>
          Email: Daniel Wahab <a href="mailto:dow26@cornell.edu">dow26@cornell.edu</a>        </p>
        <p style={contactStyles}>
          Email: Nolan Fuller<a href="mailto:naf47@cornell.edu">naf47@cornell.edu</a>        </p>
      </div>
    </Layout>
  );
}