import React from 'react';
import Card from './Card';

const CardList = ({ cards, favorites, onToggleFavorite, onCardSelect }) => {
  if (!cards.length) {
    return <p>No cards to display.</p>;
  }

  return (
    <div className="card-list">
      {cards.map((card) => (
        <Card
          key={card.id}
          card={card}
          isFavorite={favorites.includes(card.id)}
          onToggleFavorite={() => onToggleFavorite(card.id)}
          onCardSelect={() => onCardSelect(card)}
        />
      ))}
    </div>
  );
};

export default CardList;
