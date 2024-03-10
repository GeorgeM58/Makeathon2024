import React from 'react';
import Layout from '@theme/Layout';

const projects = [
  {
    title: 'Metro Mania',
    description: `Metro Mania is a project that our group put together for the Makeathon 2024 at Cornell University.
    The group consisted George Maidhof, Kaitlyn Beiler, Dan Wahab and Nolan Fuller. Each of us focused on a different 
    part of the project. George focused on the development of the website and helping with the electronics. Kaitlyn focused
    on the sensor and project integration and developing most of the overal project plan. Dan focused on data translation 
    of the project along with helping the overal design. Nolan served as our mechanical designer and helped make our CAD models.
    
    Our overall focus of the project is to design something that would be effective in the scope of "Urban Development". We
    took the route to focus on design of a light source that would be effective and efficent energy wise, reducing the overall
    power consumed if utilized, while also trying to incorperate ways for reusable energy to aim for a long term more effective 
    model. 
    
    Our project was to make a effective light source system designed to be effective for a Bus Stop! This is done taking in two main
    details about the enviorment to design a light that would not be reliant on a non-autonomous system. The data we are using 
    consist of, in priority, the amount of light present outside and also if there is any human movement near by. The goal is
    to make a light at a bus stop that uses solar energy to effectivly charge during the day. From there, if there based on the readings 
    we get from a Photodiode, converting that data to how bright/dim the light should be. We also have the feature where if you are
    closer to the light, it should become brighter as well! 
    
    Some of the To-Dos we would like to add to our project if we had more technology at our disposal or had more time would be
    adding a rechargable battery that would actually work with solar energy to provide an effective system. Also, having a way
    to have a multi-colored diode that would like have different features meanings for the user to translate. Where, something 
    like blue might represent that a bus is coming near by, etc.`,
  },
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