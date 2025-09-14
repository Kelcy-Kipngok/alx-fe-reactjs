import React from 'react';
import { Link } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeList = () => {
  const recipes = useRecipeStore((s) => s.recipes);

  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.length === 0 ? (
        <p>No recipes yet. Add one above!</p>
      ) : (
        recipes.map((r) => (
          <div key={r.id} style={{ border: '1px solid #ccc', padding: 10, marginBottom: 10 }}>
            <h3>{r.title}</h3>
            <p>{r.description.length > 120 ? r.description.slice(0, 120) + '…' : r.description}</p>
            <div>
              <Link to={`/recipes/${r.id}`} style={{ marginRight: 10 }}>View</Link>
              <Link to={`/recipes/${r.id}/edit`} style={{ marginRight: 10 }}>Edit</Link>
              <DeleteRecipeButton id={r.id} />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
import { useRecipeStore } from '../store/recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.length === 0 ? (
        <p>No recipes yet. Add one below!</p>
      ) : (
        recipes.map((recipe) => (
          <div key={recipe.id} style={{ border: '1px solid #ddd', margin: '10px', padding: '10px' }}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
