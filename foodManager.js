import { foodDatabase } from './food-data.js'; // Make sure this matches your data file name, or adjust it

export const FoodManager = {
  getByMeal(meal) {
    return foodDatabase.filter(item => item.mealTypes.includes(meal));
  },
  getByCategory(meal, category) {
    if (category === 'all') return this.getByMeal(meal);
    return foodDatabase.filter(item => item.mealTypes.includes(meal) && item.category === category);
  },
  searchByIngredient(ingredientName) {
    const query = ingredientName.toLowerCase();
    return foodDatabase.filter(item => 
      item.ingredients.some(ing => ing.toLowerCase().includes(query))
    );
  },
  addRecipe(newRecipe) {
    foodDatabase.push(newRecipe);
  }
};
