// src/components/FavoriteButton.jsx
import React from 'react';
import { useRecipeStore } from '../recipeStore';

const FavoriteButton = ({ recipeId }) => {
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  const isFavorite = favorites.includes(recipeId);

  return (
    <button
      onClick={() => (isFavorite ? removeFavorite(recipeId) : addFavorite(recipeId))}
      style={{
        marginLeft: '10px',
        background: isFavorite ? 'gold' : '#eee',
        border: '1px solid #ccc',
        padding: '5px 10px',
        borderRadius: '4px',
        cursor: 'pointer',
      }}
    >
      {isFavorite ? '★ Unfavorite' : '☆ Favorite'}
    </button>
  );
};

export default FavoriteButton;
