import React from 'react';

type BlogPost = {
  title: string;
  content: string;
};

const blogPosts: BlogPost[] = [
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
              <p style={{ fontSize: '1rem' }}></p>
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