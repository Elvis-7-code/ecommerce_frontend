import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Minus, Plus, ShoppingBag, Trash2, Truck } from "lucide-react";
import { useCart } from "../context/CartContext";

const money = (n) => `KSh ${n.toLocaleString()}`;

export default function Cart() {
  const { cart, subtotal, updateQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();
  const estimatedDelivery = subtotal > 0 ? 500 : 0;

  if (!cart.length) {
    return <div className="container empty-page"><span className="empty-icon"><ShoppingBag size={34}/></span><h1>Your cart is empty</h1><p>Looks like you haven't added anything yet.</p><Link to="/shop" className="btn btn-primary">Start shopping <ArrowRight size={17}/></Link></div>;
  }

  return (
    <div className="page">
      <div className="container page-title-row"><div><span className="eyebrow">Shopping bag</span><h1>Your cart <small>({cart.length} products)</small></h1></div><Link to="/shop">← Continue shopping</Link></div>
      <section className="container cart-layout">
        <div className="cart-items">
          {cart.map((item) => (
            <article className="cart-item" key={item.id}>
              <Link to={`/product/${item.id}`} className="cart-item-image"><img src={item.image} alt={item.name}/></Link>
              <div className="cart-item-info"><span className="product-category">{item.categoryName}</span><Link to={`/product/${item.id}`}><h3>{item.name}</h3></Link><span className="item-stock">● In stock</span></div>
              <div className="cart-qty"><button onClick={() => updateQuantity(item.id, item.quantity-1)}><Minus size={14}/></button><span>{item.quantity}</span><button onClick={() => updateQuantity(item.id, item.quantity+1)}><Plus size={14}/></button></div>
              <strong className="cart-item-price">{money(item.price * item.quantity)}</strong>
              <button className="remove-btn" onClick={() => removeFromCart(item.id)}><Trash2 size={17}/></button>
            </article>
          ))}
          <div className="delivery-hint"><Truck size={19}/><div><strong>Nairobi delivery available</strong><span>Your exact delivery fee will be calculated using your delivery location at checkout.</span></div></div>
        </div>

        <aside className="order-summary">
          <h2>Order summary</h2>
          <div className="summary-row"><span>Subtotal</span><strong>{money(subtotal)}</strong></div>
          <div className="summary-row"><span>Estimated delivery</span><strong>{money(estimatedDelivery)}</strong></div>
          <p className="summary-note">Final delivery fee is based on your distance from our store.</p>
          <div className="summary-total"><span>Total</span><strong>{money(subtotal + estimatedDelivery)}</strong></div>
          <button className="btn btn-primary full-btn" onClick={() => navigate("/checkout")}>Proceed to checkout <ArrowRight size={17}/></button>
          <div className="secure-note">🔒 Secure checkout · M-Pesa supported</div>
        </aside>
      </section>
    </div>
  );
}