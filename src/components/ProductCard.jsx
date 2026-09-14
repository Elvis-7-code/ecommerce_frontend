import { Heart, ShoppingCart, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../context/CartContext";

const money = (n) => `KSh ${n.toLocaleString()}`;

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [liked, setLiked] = useState(false);

  return (
    <article className="product-card">
      <div className="product-image-wrap">
        {product.badge && <span className="product-badge">{product.badge}</span>}
        <button
          className={`wishlist ${liked ? "liked" : ""}`}
          onClick={() => setLiked(!liked)}
          aria-label="Wishlist"
        >
          <Heart size={18} fill={liked ? "currentColor" : "none"} />
        </button>
        <Link to={`/product/${product.id}`} className="product-image-link">
          <img src={product.image} alt={product.name} />
        </Link>
      </div>

      <div className="product-info">
        <span className="product-category">{product.categoryName}</span>
        <Link to={`/product/${product.id}`} className="product-name">{product.name}</Link>
        <div className="rating-row">
          <span className="stars"><Star size={13} fill="currentColor" /> {product.rating}</span>
          <span className="review-count">({product.reviews})</span>
        </div>
        <div className="price-row">
          <strong>{money(product.price)}</strong>
          {product.oldPrice && <del>{money(product.oldPrice)}</del>}
        </div>
        <button className="add-cart-btn" onClick={() => addToCart(product)}>
          <ShoppingCart size={16} /> Add to cart
        </button>
      </div>
    </article>
  );
}