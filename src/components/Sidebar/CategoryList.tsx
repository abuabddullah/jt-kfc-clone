import React, { useRef } from "react";
import { ChevronRight } from "lucide-react";
import { categories } from "../../data/categories";

interface CategoryListProps {
  onCategoryClick: (category: string) => void;
  activeCategory: string;
}

export const CategoryList: React.FC<CategoryListProps> = ({
  onCategoryClick,
  activeCategory,
}) => {
  const listRef = useRef<HTMLUListElement>(null);

  const handleCategoryClick = (category: string) => {
    onCategoryClick(category);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 sticky top-4">
      <h2 className="text-xl font-bold mb-4">Menu</h2>
      <ul
        ref={listRef}
        className="space-y-2 max-h-[calc(100vh-200px)] overflow-y-auto scrollbar-thin scrollbar-transparent"
      >
        {categories.map((category) => (
          <li key={category}>
            <button
              onClick={() => handleCategoryClick(category)}
              className={`w-full flex items-center justify-between p-3 rounded-md transition-all duration-300 ${
                activeCategory === category
                  ? "bg-red-500 text-white translate-x-2"
                  : "hover:bg-gray-100 hover:translate-x-1"
              }`}
            >
              <span className="text-left">{category}</span>
              <ChevronRight
                size={20}
                className={`transition-transform duration-300 ${
                  activeCategory === category ? "transform translate-x-1" : ""
                }`}
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
