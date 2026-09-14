import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Filter, SlidersHorizontal, X } from "lucide-react";
import { categories, products } from "../data/products";
import ProductCard from "../components/ProductCard";
import { useState } from "react";

export default function Shop() {
  const [params, setParams] = useSearchParams();
  const [mobileFilters, setMobileFilters] = useState(false);
  const category = params.get("category") || "all";
  const search = params.get("search") || "";
  const sort = params.get("sort") || "popular";

  const filtered = useMemo(() => {
    let list = [...products];
    if (category !== "all") list = list.filter((p) => p.category === category);
    if (search) {
      const q = search.toLowerCase();
      list = list.filter((p) => `${p.name} ${p.categoryName}`.toLowerCase().includes(q));
    }
    if (sort === "low") list.sort((a, b) => a.price - b.price);
    if (sort === "high") list.sort((a, b) => b.price - a.price);
    if (sort === "rating") list.sort((a, b) => b.rating - a.rating);
    return list;
  }, [category, search, sort]);

  const selectCategory = (value) => {
    const next = new URLSearchParams(params);
    if (value === "all") next.delete("category");
    else next.set("category", value);
    setParams(next);
    setMobileFilters(false);
  };

  return (
    <div className="page">
      <section className="page-header">
        <div className="container">
          <span className="eyebrow">Our collection</span>
          <h1>{search ? `Results for "${search}"` : category === "all" ? "Shop everything" : categories.find(c => c.id === category)?.name}</h1>
          <p>Good stuff. Fair prices. Delivered around Nairobi.</p>
        </div>
      </section>

      <section className="container shop-layout">
        <aside className={`filters ${mobileFilters ? "show" : ""}`}>
          <div className="filter-top"><strong>Filters</strong><button onClick={() => setMobileFilters(false)}><X size={18}/></button></div>
          <div className="filter-group">
            <h4>Categories</h4>
            <button className={category === "all" ? "active" : ""} onClick={() => selectCategory("all")}>All products <span>{products.length}</span></button>
            {categories.map((cat) => (
              <button key={cat.id} className={category === cat.id ? "active" : ""} onClick={() => selectCategory(cat.id)}>
                {cat.name}<span>{products.filter(p => p.category === cat.id).length}</span>
              </button>
            ))}
          </div>
          <div className="filter-group">
            <h4>Price range</h4>
            <label><input type="checkbox" /> Under KSh 5,000</label>
            <label><input type="checkbox" /> KSh 5,000 – 20,000</label>
            <label><input type="checkbox" /> KSh 20,000 – 50,000</label>
            <label><input type="checkbox" /> Above KSh 50,000</label>
          </div>
          <div className="filter-note">
            <span>🚚</span>
            <div><strong>Nairobi delivery</strong><p>Fee calculated at checkout based on distance.</p></div>
          </div>
        </aside>

        {mobileFilters && <div className="filter-overlay" onClick={() => setMobileFilters(false)} />}

        <div className="shop-content">
          <div className="shop-toolbar">
            <button className="mobile-filter-btn" onClick={() => setMobileFilters(true)}><SlidersHorizontal size={17}/> Filters</button>
            <span>{filtered.length} products</span>
            <select value={sort} onChange={(e) => {
              const next = new URLSearchParams(params);
              next.set("sort", e.target.value);
              setParams(next);
            }}>
              <option value="popular">Sort: Popular</option>
              <option value="rating">Top rated</option>
              <option value="low">Price: Low to high</option>
              <option value="high">Price: High to low</option>
            </select>
          </div>
          {filtered.length ? (
            <div className="product-grid">{filtered.map((p) => <ProductCard key={p.id} product={p} />)}</div>
          ) : (
            <div className="empty-state"><Filter size={32}/><h3>No products found</h3><p>Try another search or category.</p></div>
          )}
        </div>
      </section>
    </div>
  );
}