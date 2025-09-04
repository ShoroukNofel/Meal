const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

// جلب كل التصنيفات
export async function getCategories() {
  try {
    const res = await fetch(`${BASE_URL}/categories.php`);
    const data = await res.json();
    return data.categories || [];
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

// جلب الوجبات حسب التصنيف
export async function getMealsByCategory(category) {
  try {
    const res = await fetch(`${BASE_URL}/filter.php?c=${category}`);
    const data = await res.json();
    return data.meals || [];
  } catch (error) {
    console.error("Error fetching meals by category:", error);
    return [];
  }
}

// جلب تفاصيل وجبة معينة بالـ ID
export async function getMealDetails(id) {
  try {
    const res = await fetch(`${BASE_URL}/lookup.php?i=${id}`);
    const data = await res.json();
    return data.meals ? data.meals[0] : null;
  } catch (error) {
    console.error("Error fetching meal details:", error);
    return null;
  }
}

// البحث عن وجبات حسب الاسم (أو بدون اسم = كل الوجبات)
export async function searchMeals(query) {
  try {
    const res = await fetch(`${BASE_URL}/search.php?s=${query}`);
    const data = await res.json();
    return data.meals || [];
  } catch (error) {
    console.error("Error searching meals:", error);
    return [];
  }
}


