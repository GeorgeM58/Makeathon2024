import React from 'react';

const Sidebar = () => {
  return (
    <div className="constant-sidebar">
      <img src="/img/gpm_pic.png" alt="Your Profile" />
      <div className="contact-info">
        <h4>Your Name</h4>
        <p>Your contact information here</p>
      </div>
    </div>
  );
};

export default Sidebar;