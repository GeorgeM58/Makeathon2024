import React, { useState } from 'react';
import Layout from '@theme/Layout';

function PhotosPage() {
  const [enlargedPhoto, setEnlargedPhoto] = useState(null);

  const handlePhotoClick = (photo) => {
    setEnlargedPhoto(photo);
  };

  const handleCloseClick = () => {
    setEnlargedPhoto(null);
  };

  // Placeholder image for all photos
  const placeholderImage = 'img/Photos/doc.png'; // Replace with the actual path to "doc.jpg"

  return (
    <Layout>
      <div>
        <h1>Our Photos</h1>
        {/* No need for mapping through photosByMonth */}
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {/* Placeholder image for all photos */}
          {[1, 2, 3, 4, 5, 6, 7].map((photoId) => (
            <div
              key={photoId}
              style={{ width: '25%', padding: '10px', cursor: 'pointer' }}
              onClick={() => handlePhotoClick({ imageUrl: placeholderImage })}
            >
              <img
                alt={`Placeholder Photo #${photoId}`}
                style={{ width: '100%', height: 'auto' }}
              />
              <h3>Placeholder Photo #{photoId}</h3>
              <p>Description for Placeholder Photo #{photoId}</p>
            </div>
          ))}
        </div>
      </div>
      {enlargedPhoto && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '80%',
              maxWidth: 800,
              maxHeight: '80%',
            }}
          >
            <button
              style={{
                position: 'absolute',
                top: 10,
                right: 10,
                padding: '5px 10px',
                background: 'transparent',
                color: '#fff',
                border: 'none',
                cursor: 'pointer',
                fontSize: '24px',
              }}
              onClick={handleCloseClick}
            >
              &times;
            </button>
            <img
              src={enlargedPhoto.imageUrl}
              alt="Enlarged Photo"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      )}
    </Layout>
  );
}

export default PhotosPage;