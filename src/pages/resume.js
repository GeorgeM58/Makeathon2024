import React from 'react';
import Layout from '@theme/Layout';

function ResumePage() {
  return (
    <Layout>
      <div style={{ paddingTop: '3rem' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ textAlign: 'center' }}>Resume</h1>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src="img/GM_Resume.png" alt="Resume" style={{ maxWidth: '100%', height: 'auto' }} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ResumePage;