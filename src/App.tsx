import React, { useState, useMemo } from "react";
import { Header } from "./components/Header";
import { Banner } from "./components/Banner/Banner";
import { CategoryList } from "./components/Sidebar/CategoryList";
import { ProductSection } from "./components/ProductSection/ProductSection";
import { Cart } from "./components/Cart";
import { Footer } from "./components/Footer/Footer";
import { HelpWidget } from "./components/HelpWidget/HelpWidget";
import { useCart } from "./hooks/useCart";
import { products } from "./data/products";
import { categories } from "./data/categories";
import { scrollToCategory } from "./utils/scroll";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const { cart, addToCart, removeFromCart, updateQuantity } = useCart();

  const filteredProducts = useMemo(
    () =>
      products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    [searchQuery]
  );

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    scrollToCategory(category);
  };

  const productsByCategory = useMemo(() => {
    return categories.reduce((acc, category) => {
      acc[category] = filteredProducts.filter(
        (product) => product.category === category
      );
      return acc;
    }, {} as Record<string, typeof products>);
  }, [filteredProducts]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Banner />

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <CategoryList
              onCategoryClick={handleCategoryClick}
              activeCategory={activeCategory}
            />
          </div>

          <div className="lg:col-span-2 space-y-16">
            {categories.map((category) => (
              <ProductSection
                key={category}
                category={category}
                products={productsByCategory[category]}
                onAddToCart={addToCart}
                isActive={category === activeCategory}
              />
            ))}
          </div>

          <div className="lg:col-span-1">
            <Cart
              items={cart}
              onUpdateQuantity={updateQuantity}
              onRemoveItem={removeFromCart}
            />
          </div>
        </div>
      </main>

      <HelpWidget />
      <Footer />
    </div>
  );
}

export default App;
