// src/js/api.js

// Fetch all pizzas from pizza.json
export async function fetchPizzas() {
  try {
    const response = await fetch('/src/data/pizza.json');
    if (!response.ok) throw new Error('Failed to fetch pizzas');
    return await response.json();
  } catch (err) {
    console.error('Error loading pizza list:', err);
    return [];
  }
}

// Fetch pizza details by ID
export async function fetchPizzaById(id) {
  const pizzas = await fetchPizzas();
  return pizzas.find(p => p.id === Number(id));
}

// Fetch all rewards from reward.json
export async function fetchRewards() {
  try {
    const response = await fetch('/src/data/reward.json');
    if (!response.ok) throw new Error('Failed to fetch rewards');
    return await response.json();
  } catch (err) {
    console.error('Error loading rewards:', err);
    return [];
  }
}
