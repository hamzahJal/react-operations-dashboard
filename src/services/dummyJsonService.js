const BASE_URL = 'https://dummyjson.com';

// Fetch users (agents)
export async function fetchUsers(limit = 30) {
  try {
    const response = await fetch(`${BASE_URL}/users?limit=${limit}`);
    if (!response.ok) throw new Error('Failed to fetch users');
    const data = await response.json();
    return data.users;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
}

// Fetch product categories (departments)
export async function fetchCategories() {
  try {
    const response = await fetch(`${BASE_URL}/products/categories`);
    if (!response.ok) throw new Error('Failed to fetch categories');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

// Fetch products
export async function fetchProducts(limit = 30) {
  try {
    const response = await fetch(`${BASE_URL}/products?limit=${limit}`);
    if (!response.ok) throw new Error('Failed to fetch products');
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}
