import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipeId = Number(id);
  const recipe = useRecipeStore((s) => s.recipes.find((r) => r.id === recipeId));

  if (!recipe) {
    return (
      <div>
        <p>Recipe not found.</p>
        <Link to="/">Back to list</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      <div style={{ marginTop: 12 }}>
        <Link to={`/recipes/${recipeId}/edit`} style={{ marginRight: 10 }}>Edit</Link>
        <DeleteRecipeButton id={recipeId} />
      </div>
      <div style={{ marginTop: 12 }}>
        <Link to="/">Back to list</Link>
      </div>
    </div>
  );
};

export default RecipeDetails;
