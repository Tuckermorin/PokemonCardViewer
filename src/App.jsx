import React, { useState } from 'react';
import cards from './data/cards'; // mock card data
import CardList from './components/CardList';
import CardDetail from './components/CardDetail'; // optional for later
import './App.css';

const App = () => {
  // Store list of favorite card IDs
  const [favorites, setFavorites] = useState([]);
  
  // Store selected card for detail view
  const [selectedCard, setSelectedCard] = useState(null);

  // Toggle a card as favorite/unfavorite
  const toggleFavorite = (cardId) => {
    setFavorites(prev =>
      prev.includes(cardId)
        ? prev.filter(id => id !== cardId)
        : [...prev, cardId]
    );
  };

  // Select a card to view details
  const handleCardSelect = (card) => {
    setSelectedCard(card);
  };

  // Close detail view
  const clearSelectedCard = () => {
    setSelectedCard(null);
  };

  return (
    <div className="app-container">
      <h1>Pokémon Card Viewer</h1>

      <CardList
        cards={cards}
        favorites={favorites}
        onToggleFavorite={toggleFavorite}
        onCardSelect={handleCardSelect}
      />

      {selectedCard && (
        <CardDetail
          card={selectedCard}
          onClose={clearSelectedCard}
        />
      )}
    </div>
  );
};

export default App;
