import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';
// src/App.jsx
import React, { useEffect } from 'react';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import { useRecipeStore } from './recipeStore';

function App() {
  const setRecipes = useRecipeStore((state) => state.addRecipe);

  // Seed demo recipes on first load
  useEffect(() => {
    setRecipes({ id: 1, title: 'Spaghetti Bolognese', description: 'Rich tomato pasta with beef' });
    setRecipes({ id: 2, title: 'Avocado Toast', description: 'Crispy bread with avocado' });
    setRecipes({ id: 3, title: 'Chicken Curry', description: 'Spicy and creamy curry' });
  }, [setRecipes]);

  return (
    <div style={{ padding: '20px', maxWidth: '700px', margin: '0 auto' }}>
      <h1>🍳 Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
      <FavoritesList />
      <RecommendationsList />
    </div>
  );
}

export default App;

fun// src/App.jsx
import React, { useEffect } from 'react';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import SearchBar from './components/SearchBar';
import { useRecipeStore } from './recipeStore';

function App() {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  // Initialize with empty search to show all recipes
  useEffect(() => {
    setSearchTerm('');
  }, [setSearchTerm]);

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>🍳 Recipe Sharing App</h1>
      <SearchBar />
      <RecipeList />
      <AddRecipeForm />
    </div>
  );
}

export default App;
ction App() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: 20 }}>
      <h1>🍲 Recipe Sharing App</h1>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <AddRecipeForm />
              <RecipeList />
            </>
          }
        />

        <Route path="/recipes/:id" element={<RecipeDetails />} />
        <Route path="/recipes/:id/edit" element={<EditRecipeForm />} />
      </Routes>
    </div>
  );
}

export default App;
"Router"
function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>🍲 Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
}

export default App;
