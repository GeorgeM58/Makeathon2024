import React from 'react';

type BlogPost = {
  date: string;
  title: string;
  content: string;
};

const blogPosts: BlogPost[] = [
  {
    date: 'August 2023',
    title: 'Finished Cornell graduate course ECE 6775: High-Level Digital Design Automation Tutorial Document',
    content: `Worked alongside two graduate students to write a 14-page tutorial on FPGA optimization techniques
    using Vivado incorporating pragmas (e.g. unrolling, pipelining, and array partitioning)`,
  },
  // Add more blog posts if needed
];

function BlogSection() {
  return (
    <section className="blog-section">
      <div className="container">
        <h2
          className="section-title"
          style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px' }}
        >
          Latest Updates
        </h2>
        <div className="blog-posts">
          {blogPosts.map((post, idx) => (
            <div
              className="blog-post"
              key={idx}
              style={{
                border: '1px solid #ddd',
                padding: '20px',
                borderRadius: '8px',
              }}
            >
              <p style={{ fontSize: '1rem' }}>{post.date}</p>
              <h3
                style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}
              >
                {post.title}
              </h3>
              <p style={{ fontSize: '1rem' }}>{post.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomepageFeatures() {
  return (
    <div>
      {/* Existing code for feature section */}
      <section className="features">
        <div className="container">
          <div className="row">
            {/* Existing code for features */}
          </div>
        </div>
      </section>
      <BlogSection />
    </div>
  );
}