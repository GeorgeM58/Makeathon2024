import React, { useState } from 'react';
import Layout from '@theme/Layout';

const photosByMonth = [
  {
    month: 'July 2023',
    photos: [
      {
        id: 5,
        title: 'Buttermilk State Park Photo #1',
        description: '',
        imageUrl: 'img/Photos/July23_1.jpg',
      },
      {
        id: 6,
        title: 'Buttermilk State Park Photo #2',
        description: '',
        imageUrl: 'img/Photos/July23_2.jpg',
      },
      {
        id: 7,
        title: 'Buttermilk State Park Photo #3',
        description: '',
        imageUrl: 'img/Photos/July23_3.jpg',
      },
    ],
  },
  {
    month: 'April 2023',
    photos: [
      {
        id: 1,
        title: 'Botanic Gardens/Flat Rock Run',
        description: '',
        imageUrl: 'img/Photos/Ap23_1.jpg',
      },
      {
        id: 2,
        title: 'Botanic Gardens/Flat Rock Run',
        description: '',
        imageUrl: 'img/Photos/Ap23_2.jpg',
      },
      {
        id: 3,
        title: 'Botanic Gardens/Flat Rock Run',
        description: '',
        imageUrl: 'img/Photos/Ap23_3.jpg',
      },
      {
        id: 4,
        title: 'Botanic Gardens/Flat Rock Run',
        description: 'Description for Photo 4',
        imageUrl: 'img/Photos/Ap23_4.jpg',
      },
    ],
  },
  // Add more months and photos as needed
];

function PhotosPage() {
    const [enlargedPhoto, setEnlargedPhoto] = useState(null);
  
    const handlePhotoClick = (photo) => {
      setEnlargedPhoto(photo);
    };
  
    const handleCloseClick = () => {
      setEnlargedPhoto(null);
    };
  
    return (
      <Layout>
        <div>
          <h1>My Photos</h1>
          {photosByMonth.map((monthPhotos) => (
            <div key={monthPhotos.month}>
              <h2>{monthPhotos.month}</h2>
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {monthPhotos.photos.map((photo) => (
                  <div
                    key={photo.id}
                    style={{ width: '25%', padding: '10px', cursor: 'pointer' }}
                    onClick={() => handlePhotoClick(photo)}
                  >
                    <img
                      src={photo.imageUrl}
                      alt={photo.title}
                      style={{ width: '100%', height: 'auto' }}
                    />
                    <h3>{photo.title}</h3>
                    <p>{photo.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
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
                alt={enlargedPhoto.title}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        )}
      </Layout>
    );
  }
  
  export default PhotosPage;