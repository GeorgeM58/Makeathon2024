import React from 'react';
import Layout from '@theme/Layout';

const peopleData = [
  {
    name: 'George Maidhof',
    image: 'gpm_pic.img',
    description: `
    Hello, I'm George! I am currently a junior majoring in Electrical and Computer Engineering at Cornell University. I serve as Project Full Team Lead
    of Cornell Nexus, a Project Team that aims to use technology to tackle and raise awareness about microplastics and pollution on our beaches and oceans.
    I also serve as a Residential Advisor in George Jameson Hall where I get to mentor and help freshmen adjust to college life and provide events to support
    and develop culture and connections within my community.
    One of my major hobbies is exploring out in nature, especially at the beach.I love to surf, body surf, paddle board, kayak, and row! I previously worked
    as a Jones Beach lifeguard for 2 summers and even participated in competitions! Some of my favorite events included Beach Flags and the 2k Beach Run.
    Another one of my hobbies is many forms of staying in shape and working out.In high school, some of the sports I did were Track, Cross Country and Swimming.
    As a distance runner, I love to run long miles and explore many of the trails within my area! While in college, I also expanded some other activities
    such as taking a full year of PE Taekwondo, going to the gym and playing pickup basketball! I am a HUGE Lakers fan!! Staying in shape allows for me to perform
    at my best academically and keeps me productive.
    Something else I enjoy doing with my free time is making engineering projects! A major part of engineering is being able to think outside of the box and being
    able to solve real life problems through creativity! By making numerous projects, I hope to expand my area of expertise where I can develop many different solutions
    for a problem.In doing so, I hope to bring joy and help those around me! Feel free to look at my Projects Page!`,
  },
  {
    name: 'George Maidhof',
    image: 'gpm_pic.img',
    description: `
    Hello, I'm George! I am currently a junior majoring in Electrical and Computer Engineering at Cornell University. I serve as Project Full Team Lead
    of Cornell Nexus, a Project Team that aims to use technology to tackle and raise awareness about microplastics and pollution on our beaches and oceans.
    I also serve as a Residential Advisor in George Jameson Hall where I get to mentor and help freshmen adjust to college life and provide events to support
    and develop culture and connections within my community.
    One of my major hobbies is exploring out in nature, especially at the beach.I love to surf, body surf, paddle board, kayak, and row! I previously worked
    as a Jones Beach lifeguard for 2 summers and even participated in competitions! Some of my favorite events included Beach Flags and the 2k Beach Run.
    Another one of my hobbies is many forms of staying in shape and working out.In high school, some of the sports I did were Track, Cross Country and Swimming.
    As a distance runner, I love to run long miles and explore many of the trails within my area! While in college, I also expanded some other activities
    such as taking a full year of PE Taekwondo, going to the gym and playing pickup basketball! I am a HUGE Lakers fan!! Staying in shape allows for me to perform
    at my best academically and keeps me productive.
    Something else I enjoy doing with my free time is making engineering projects! A major part of engineering is being able to think outside of the box and being
    able to solve real life problems through creativity! By making numerous projects, I hope to expand my area of expertise where I can develop many different solutions
    for a problem.In doing so, I hope to bring joy and help those around me! Feel free to look at my Projects Page!`,
  },
  {
    name: 'George Maidhof',
    image: 'gpm_pic.img',
    description: `
    Hello, I'm George! I am currently a junior majoring in Electrical and Computer Engineering at Cornell University. I served as Project Full Team Lead
    of Cornell Nexus, a Project Team that aims to use technology to tackle and raise awareness about microplastics and pollution on our beaches and oceans.
    I also serve as a Residential Advisor in George Jameson Hall where I get to mentor and help freshmen adjust to college life and provide events to support
    and develop culture and connections within my community.
    One of my major hobbies is exploring out in nature, especially at the beach.I love to surf, body surf, paddle board, kayak, and row! I previously worked
    as a Jones Beach lifeguard for 2 summers and even participated in competitions! Some of my favorite events included Beach Flags and the 2k Beach Run.
    Another one of my hobbies is many forms of staying in shape and working out.In high school, some of the sports I did were Track, Cross Country and Swimming.
    As a distance runner, I love to run long miles and explore many of the trails within my area! While in college, I also expanded some other activities
    such as taking a full year of PE Taekwondo, going to the gym and playing pickup basketball! I am a HUGE Lakers fan!! Staying in shape allows for me to perform
    at my best academically and keeps me productive.
    Something else I enjoy doing with my free time is making engineering projects! A major part of engineering is being able to think outside of the box and being
    able to solve real life problems through creativity! By making numerous projects, I hope to expand my area of expertise where I can develop many different solutions
    for a problem.In doing so, I hope to bring joy and help those around me! Feel free to look at my Projects Page!`,
  },
]

export default function AboutMePage() {
  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    minHeight: 'calc(100vh - 200px)',
    background: 'var(--ifm-background-color)',
    color: 'var(--ifm-font-color-base)',
    padding: '20px',
  };

  const contentContainerStyles = {
    display: 'flex',
    flexDirection: 'row', // Change to row for horizontal alignment
    alignItems: 'flex-start', // Align items to the top
    maxWidth: '1000px',
  };

  const imageContainerStyles = {
    width: '100px',
    height: '100px',
    marginRight: '20px', // Add spacing between image and content
    border: '4px solid var(--ifm-color-primary)',
    borderRadius: '50%',
    overflow: 'hidden',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const imageStyles = {
    width: '100%',
    height: 'auto',
  };

  const contentStyles = {
    flex: 1,
    textAlign: 'left',
    paddingTop: '10px',
  };

  const headingStyles = {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
  };

  const descriptionStyles = {
    fontSize: '1.2rem',
    marginBottom: '1rem',
  };

  return (
    <Layout>
      <div style={containerStyles}>
        {peopleData.map((person, index) => (
          <div key={index} style={contentContainerStyles}>
            <div style={imageContainerStyles}>
              <img src={person.image} alt={`${person.name}'s Profile`} style={imageStyles} />
            </div>
            <div style={contentStyles}>
              <h1 style={headingStyles}>{person.name}:</h1>
              <p style={descriptionStyles}>{person.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}