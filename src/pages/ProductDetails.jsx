import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Heart, Minus, Plus, ShoppingCart, Star, Truck, ShieldCheck, RotateCcw, Check } from "lucide-react";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

const money = (n) => `KSh ${n.toLocaleString()}`;

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);
  const [liked, setLiked] = useState(false);

  if (!product) return <div className="container empty-page"><h1>Product not found</h1><Link to="/shop" className="btn btn-primary">Back to shop</Link></div>;

  const buyNow = () => {
    addToCart(product, qty);
    navigate("/cart");
  };

  return (
    <div className="page">
      <div className="container breadcrumbs"><Link to="/">Home</Link><span>/</span><Link to="/shop">Shop</Link><span>/</span><span>{product.name}</span></div>

      <section className="container product-detail">
        <div className="detail-gallery">
          <div className="detail-image"><img src={product.image} alt={product.name}/></div>
          <div className="thumbnail-row"><div className="thumb active"><img src={product.image} alt=""/></div><div className="thumb"><img src={product.image} alt=""/></div><div className="thumb"><img src={product.image} alt=""/></div></div>
        </div>

        <div className="detail-copy">
          <span className="product-category">{product.categoryName}</span>
          <h1>{product.name}</h1>
          <div className="detail-rating"><span className="stars"><Star size={15} fill="currentColor"/> {product.rating}</span><span>({product.reviews} reviews)</span><span className="stock-dot">● In stock</span></div>
          <div className="detail-price"><strong>{money(product.price)}</strong>{product.oldPrice && <del>{money(product.oldPrice)}</del>}<span>Save {Math.round((1-product.price/product.oldPrice)*100)}%</span></div>
          <p className="detail-description">{product.description}</p>

          <div className="feature-list">
            {product.features.map((feature) => <div key={feature}><Check size={16}/>{feature}</div>)}
          </div>

          <div className="detail-buy">
            <div className="quantity"><button onClick={() => setQty(Math.max(1, qty-1))}><Minus size={16}/></button><span>{qty}</span><button onClick={() => setQty(Math.min(product.stock, qty+1))}><Plus size={16}/></button></div>
            <button className="btn btn-primary flex-btn" onClick={() => addToCart(product, qty)}><ShoppingCart size={18}/> Add to cart</button>
            <button className={`heart-btn ${liked ? "liked" : ""}`} onClick={() => setLiked(!liked)}><Heart size={20} fill={liked ? "currentColor" : "none"}/></button>
          </div>
          <button className="buy-now" onClick={buyNow}>Buy it now</button>

          <div className="detail-perks">
            <div><Truck size={20}/><div><strong>Fast delivery</strong><span>Nairobi & nearby areas</span></div></div>
            <div><ShieldCheck size={20}/><div><strong>Secure checkout</strong><span>M-Pesa supported</span></div></div>
            <div><RotateCcw size={20}/><div><strong>Easy returns</strong><span>Terms apply</span></div></div>
          </div>
        </div>
      </section>

      <section className="container product-description-tabs">
        <button className="tab active">Description</button><button className="tab">Specifications</button><button className="tab">Reviews ({product.reviews})</button>
        <div className="tab-panel"><h3>Built for everyday use</h3><p>{product.description} Whether you're shopping for yourself or picking up something for the family, this product is selected for quality and practical everyday value.</p></div>
      </section>
    </div>
  );
}