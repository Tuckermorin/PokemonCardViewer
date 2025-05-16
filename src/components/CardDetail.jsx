import React from 'react';
import './CardDetail.css'; // optional if you want to style it later

const CardDetail = ({ card, onClose }) => {
  if (!card) return null;

  return (
    <div className="card-detail-overlay">
      <div className="card-detail">
        <button className="close-button" onClick={onClose}>Close ✖</button>
        <img src={card.image} alt={card.name} className="detail-image" />
        <h2>{card.name}</h2>
        <p><strong>Type:</strong> {card.type}</p>
        <p><strong>HP:</strong> {card.hp}</p>
      </div>
    </div>
  );
};

export default CardDetail;
