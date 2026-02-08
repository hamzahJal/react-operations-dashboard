import { fetchUsers, fetchCategories } from './dummyJsonService';
import { DEPARTMENT_MAP } from '@utils/constants';
import { generateRandomAHT, assignRandomDepartment } from '@utils/mockData';

// Transform DummyJSON users into agents with operational metrics
export async function fetchAgents() {
  const users = await fetchUsers();
  
  return users.map(user => ({
    id: user.id,
    name: `${user.firstName} ${user.lastName}`,
    email: user.email,
    avatar: user.image,
    department: assignRandomDepartment(),
    aht: generateRandomAHT(),
    tasksCompleted: Math.floor(Math.random() * 50) + 40,
    errorCount: Math.floor(Math.random() * 10),
    slaCompliance: Math.floor(Math.random() * 15) + 85
  }));
}

// Transform product categories into departments
export async function fetchDepartments() {
  const categories = await fetchCategories();
  
  return categories.slice(0, 5).map((category, idx) => ({
    id: idx + 1,
    name: DEPARTMENT_MAP[category.slug] || category.name,
    originalCategory: category.slug,
    metrics: {
      efficiency: Math.floor(Math.random() * 20) + 75,
      errorRate: parseFloat((Math.random() * 3 + 1).toFixed(1)),
      aht: Math.floor(Math.random() * 100) + 150,
      slaCompliance: Math.floor(Math.random() * 10) + 90
    }
  }));
}
