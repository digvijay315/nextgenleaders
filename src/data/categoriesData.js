import fintasData from "./fintasData.json";

export const fintasCategories = fintasData.categories;
export const fintasByCategory = fintasData.byCategory;
export const totalFintasProducts = fintasData.totalProducts;

export function getCategoryBySlug(slug) {
  if (!slug) return null;
  const normalized = slug.toLowerCase().trim();
  
  // Direct match in byCategory
  if (fintasByCategory[normalized]) {
    return fintasByCategory[normalized];
  }
  
  // Match by category slug in categories list
  const cat = fintasCategories.find(
    (c) => c.slug.toLowerCase() === normalized || String(c.id) === normalized
  );
  if (cat && fintasByCategory[cat.slug]) {
    return fintasByCategory[cat.slug];
  }
  
  return null;
}

export function getAllProducts() {
  const all = [];
  Object.values(fintasByCategory).forEach((entry) => {
    if (entry && Array.isArray(entry.products)) {
      all.push(...entry.products);
    }
  });
  return all;
}
