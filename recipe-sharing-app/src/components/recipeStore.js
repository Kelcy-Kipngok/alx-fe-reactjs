import { create } from 'zustand';

// Zustand store for managing recipes
export const useRecipeStore = create((set) => ({
  recipes: [],

  // Add a new recipe
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  // Initialize/replace recipes
  setRecipes: (recipes) => set({ recipes }),
}));
