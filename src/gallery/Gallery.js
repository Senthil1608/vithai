import React, { useState } from "react";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import "./gallery.css";
import img1 from "../gallery/img1.jpg";
import img2 from "../gallery/img2.png";
import img3 from "../gallery/img3.png";
import img4 from "../gallery/img4.jpg";
import img5 from "../gallery/img5.jpg";

const Gallery = () => {
  const images = [
    { src: img1, alt: "New Logo" },
    { src: img2, alt: "Successful completion of Skill Up -1.0" },
    { src: img3, alt: "Food Donation Drive at Tambaram" },
    { src: img4, alt: "Placement is a pleasure not pressure" },
    { src: img5, alt: "Secret to success in hackathon: Form scratch to victory" },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <NavigationBar />
      <div className="gallery-container">
        <h1 className="gallery-title">Our Moments of Impact</h1>
        <p className="gallery-description">
          Witness the impactful initiatives and the stories we create together. Every smile, every step, every change is worth sharing.
        </p>
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div
              key={index}
              className="gallery-item"
              onClick={() => openModal(image)}
            >
              <div className="gallery-image-wrapper">
                <img src={image.src} alt={image.alt} className="gallery-image" />
              </div>
              <div className="gallery-overlay">
                <p className="gallery-text">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="modal-close" onClick={closeModal}>
              &times;
            </span>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="modal-image"
            />
            <p className="modal-text">{selectedImage.alt}</p>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Gallery;
