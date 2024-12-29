export const categories = [
  "What's new",
  "Solo Baskets",
  "Combo",
  "Boxes",
  "Burgers and sandwiches",
  "Combo Baskets",
  "Juicy chicken",
  "Snacks",
  "Drinks",
  "Additionally"
] as const;

export type CategoryType = typeof categories[number];