import React, { useState } from 'react';
import './ModalComponent.scss';

function ModalComponent({ imageSrc, title, content }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="modal-container">
      <img src={imageSrc} alt={title} onClick={toggleModal} />
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>{title}</h2>
            <p>{content}</p>
            <button onClick={toggleModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalComponent;
