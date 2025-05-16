import React from 'react';
import './Card.css'; // optional: create this for styling if needed

const Card = ({ card, isFavorite, onToggleFavorite, onCardSelect }) => {
  return (
    <div className="card" onClick={onCardSelect}>
      <img src={card.image} alt={card.name} className="card-image" />
      <div className="card-info">
        <h3>{card.name}</h3>
        <p>Type: {card.type}</p>
        <p>HP: {card.hp}</p>
      </div>
      <button
        className="favorite-button"
        onClick={(e) => {
          e.stopPropagation(); // prevent card click from firing
          onToggleFavorite();
        }}
      >
        {isFavorite ? '★' : '☆'}
      </button>
    </div>
  );
};

export default Card;
