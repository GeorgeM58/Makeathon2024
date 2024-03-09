import React from 'react';
import Layout from '@theme/Layout';

const projects = [
  {
    title: 'Big Bertha Brawler the Wireless RC Car (Click for more info)',
    description: `Big Bertha is a RC that both Parker Schless and myself worked on! Our goal 
    for this project was to develop a working RC Car that utilized the programming langauge C
    and a FRDM Board. We used 2 Arduinos to faciliate the RF communication as we had trouble using RF 
    on the FRDM Board to our laptop. We used the bluetooth feature of the XBox controller to connect 
    to our laptop and transmit its signal. We wanted to utilize tank turning and be able to control the 
    direction and speed of 4 motors independently so we implimented a L298N H-Bridge. 
    
    When designing this project, it also help refresh my memory on CAD (Fusion 360) as we wanted to design 
    a frame that provided support for the motors, a lid feature to enclose electronics in the inside and also 
    have a hole that can be accessed if we wanted to use a wired controller. 
    
    The range of the RC car worked suprising well as it worked for about a approximately 50 meters in open space. 
    Our project was voted as the best project in our Embedded Systems class at Cornell (ECE 3140)!`,
    image: '/img/bertha.jpg',
    link: 'https://pages.github.coecis.cornell.edu/ece3140-sp2023/gpm58-pis7/',
  },
  {
    title: 'Drone with Object Detection, Live Video Feed, 3D Sonar Dection and GPS',
    description: 'EDIT',
    image: '/img/project2.png',
    link: 'https://example.com/project2',
  },
  {
    title: '2D Basketball Game',
    description: 'EDIT',
    image: '/img/project2.png',
    link: 'https://example.com/project2',
  },
  {
    title: 'Matrix-vector Multiplication Code with FPGA Optimizations for Vivado2019',
    description: 'EDIT',
    image: '/img/project2.png',
    link: 'https://example.com/project2',
  },
  {
    title: 'Calculator with Graphing Feature',
    description: 'EDIT',
    image: '/img/project2.png',
    link: 'https://example.com/project2',
  },
  {
    title: 'Heat Map Predicting US Minimum Wage in 2024',
    description: 'EDIT',
    image: '/img/project2.png',
    link: 'https://example.com/project2',
  },
  {
    title: 'Small LCD Alarm Clock using Arduino',
    description: 'EDIT',
    image: '/img/project2.png',
    link: 'https://example.com/project2',
  },
  // Add more projects here...
];

function Project({ title, description, image, link }) {
  return (
    <div style={{ marginBottom: '2rem' }}>
      <h3>
        <a href={link}>{title}</a>
      </h3>
      <a>
        <img src={image} alt={title} style={{ maxWidth: '100%', marginBottom: '1rem' }} />
      </a>
      <p>{description}</p>
    </div>
  );
}

function ProjectsPage() {
  return (
    <Layout>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
        <h1>Projects</h1>

        {projects.map((project) => (
          <Project
            key={project.title}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </Layout>
  );
}

export default ProjectsPage;