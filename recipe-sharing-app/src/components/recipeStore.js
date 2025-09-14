import { create } from 'zustand';
// src/recipeStore.js
import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],

  // Actions
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
      filteredRecipes: [...state.recipes, newRecipe], // update filtered list too
    })),

  updateRecipe: (id, updatedRecipe) =>
    set((state) => {
      const updatedRecipes = state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
      );
      return {
        recipes: updatedRecipes,
        filteredRecipes: state.filterLogic(updatedRecipes, state.searchTerm),
      };
    }),

  deleteRecipe: (id) =>
    set((state) => {
      const updatedRecipes = state.recipes.filter((recipe) => recipe.id !== id);
      return {
        recipes: updatedRecipes,
        filteredRecipes: state.filterLogic(updatedRecipes, state.searchTerm),
      };
    }),

  setSearchTerm: (term) =>
    set((state) => ({
      searchTerm: term,
      filteredRecipes: state.filterLogic(state.recipes, term),
    })),

  // Helper function for filtering
  filterLogic: (recipes, term) => {
    return recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(term.toLowerCase())
    );
  },
}));

// Zustand store for managing recipes
export const useRecipeStore = create((set) => ({
  recipes: [],

  // Add a new recipe
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  // Initialize/replace recipes
  setRecipes: (recipes) => set({ recipes }),
}));

  // Update an existing recipe by id. `updatedFields` is a partial object.
  updateRecipe: (id, updatedFields) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === id ? { ...r, ...updatedFields } : r
      ),
    })),

  // Delete a recipe by id
  deleteRecipe: (id) =>
    set((state) => ({ recipes: state.recipes.filter((r) => r.id !== id) })),

  // Replace/initialize recipes (useful for seeding or loading from storage)
  setRecipes: (recipes) => set({ recipes }),
}));
