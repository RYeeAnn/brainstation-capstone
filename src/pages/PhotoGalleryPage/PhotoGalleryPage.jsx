// PhotoGalleryPage.js
import React, { useState } from 'react';
import SecondHeaderComponent from '../../components/SecondHeaderComponent/SecondHeaderComponent';
import './PhotoGalleryPage.scss';

function PhotoGalleryPage() {
  const [zoomedPhoto, setZoomedPhoto] = useState(null);

  // Replace these image paths with your actual image paths
  const images = [
    require('../../assets/garage.jpeg'),
    require('../../assets/garage.jpeg'),
    require('../../assets/garage.jpeg'),
    require('../../assets/garage.jpeg'),
    require('../../assets/garage.jpeg'),
    require('../../assets/garage.jpeg'),
    require('../../assets/garage.jpeg'),
    require('../../assets/garage.jpeg'),
    require('../../assets/garage.jpeg'),
    require('../../assets/garage.jpeg'),
    require('../../assets/garage.jpeg'),
    require('../../assets/garage.jpeg'),
    require('../../assets/garage.jpeg'),
    require('../../assets/garage.jpeg'),
    require('../../assets/garage.jpeg'),
    require('../../assets/garage.jpeg'),
    require('../../assets/garage.jpeg'),
    require('../../assets/garage.jpeg'),
    require('../../assets/garage.jpeg'),
    require('../../assets/garage.jpeg'),
    require('../../assets/garage.jpeg'),
    require('../../assets/garage.jpeg'),
    require('../../assets/garage.jpeg'),
    require('../../assets/garage.jpeg'),
  ];

  const openZoom = (index) => {
    setZoomedPhoto(index);
  };

  const closeZoom = () => {
    setZoomedPhoto(null);
  };

  return (
    <section className="photo-gallery">
      <div className="photo-gallery__header">
        <SecondHeaderComponent />
      </div>

      <div className="photo-gallery__content">
        <div className="photo-gallery__grid">
          {images.map((image, index) => (
            <div className="photo-gallery__item" key={index}>
              <img
                src={image}
                alt={`Photo ${index + 1}`}
                onClick={() => openZoom(index)}
              />
            </div>
          ))}
        </div>
      </div>

      {zoomedPhoto !== null && (
        <div className="photo-gallery__zoom">
          <div className="photo-gallery__zoom-content">
            <img
              src={images[zoomedPhoto]}
              alt={`Zoomed Photo ${zoomedPhoto + 1}`}
              onClick={closeZoom}
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default PhotoGalleryPage;
