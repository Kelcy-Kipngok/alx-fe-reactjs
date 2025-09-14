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
