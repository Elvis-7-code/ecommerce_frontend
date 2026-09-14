import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, MapPin, Phone, User, Truck, CreditCard } from "lucide-react";
import { useCart } from "../context/CartContext";

const money = (n) => `KSh ${n.toLocaleString()}`;

export default function Checkout() {
  const { cart, subtotal } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", phone: "", address: "", area: "", notes: "" });
  const [distance, setDistance] = useState(8.4);

  const deliveryFee = distance <= 5 ? 300 : distance <= 10 ? 500 : distance <= 15 ? 800 : distance <= 20 ? 1200 : 1500;
  const total = subtotal + deliveryFee;

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  if (!cart.length) return <div className="container empty-page"><h1>Your cart is empty</h1><Link to="/shop" className="btn btn-primary">Shop now</Link></div>;

  return (
    <div className="page checkout-page">
      <div className="container checkout-head"><Link to="/cart"><ArrowLeft size={17}/> Back to cart</Link><div className="checkout-steps"><span className="active">1. Delivery</span><i></i><span>2. Payment</span><i></i><span>3. Confirmation</span></div></div>

      <section className="container checkout-layout">
        <div className="checkout-form">
          <div className="checkout-card">
            <div className="card-heading"><span>01</span><div><h2>Delivery information</h2><p>Where should we deliver your order?</p></div></div>
            <div className="form-grid">
              <label><span><User size={15}/> Full name</span><input name="name" value={form.name} onChange={update} placeholder="e.g. John Kamau"/></label>
              <label><span><Phone size={15}/> Phone number</span><input name="phone" value={form.phone} onChange={update} placeholder="07XX XXX XXX"/></label>
              <label className="full"><span><MapPin size={15}/> Delivery address</span><input name="address" value={form.address} onChange={update} placeholder="Building, street, estate"/></label>
              <label><span>Area / Estate</span><input name="area" value={form.area} onChange={update} placeholder="e.g. Kilimani"/></label>
              <label><span>Delivery notes <small>(optional)</small></span><input name="notes" value={form.notes} onChange={update} placeholder="Gate, floor, landmark..."/></label>
            </div>
          </div>

          <div className="checkout-card">
            <div className="card-heading"><span>02</span><div><h2>Delivery estimate</h2><p>Preview for the frontend. Maps API will replace this later.</p></div></div>
            <div className="distance-control"><div><Truck size={20}/><div><strong>Distance from store</strong><span>{distance} km · Nairobi</span></div></div><input type="range" min="1" max="30" step="0.1" value={distance} onChange={(e) => setDistance(Number(e.target.value))}/><strong>KSh {deliveryFee.toLocaleString()}</strong></div>
            <div className="delivery-rates"><span>0–5 km · KSh 300</span><span>5–10 km · KSh 500</span><span>10–15 km · KSh 800</span><span>15–20 km · KSh 1,200</span><span>20+ km · KSh 1,500+</span></div>
          </div>

          <div className="checkout-card payment-preview">
            <div className="card-heading"><span>03</span><div><h2>Payment method</h2><p>M-Pesa integration will connect here.</p></div></div>
            <label className="payment-option selected"><input type="radio" checked readOnly/><span className="mpesa-logo">M-PESA</span><div><strong>M-Pesa</strong><small>STK Push or Till Number</small></div><b>✓</b></label>
            <label className="payment-option disabled"><input type="radio" disabled/><CreditCard size={19}/><div><strong>Card</strong><small>Coming soon</small></div></label>
          </div>
        </div>

        <aside className="order-summary sticky-summary">
          <h2>Order summary</h2>
          <div className="summary-products">
            {cart.map(item => <div key={item.id} className="summary-product"><img src={item.image} alt=""/><div><strong>{item.name}</strong><span>Qty {item.quantity}</span></div><b>{money(item.price * item.quantity)}</b></div>)}
          </div>
          <div className="summary-row"><span>Subtotal</span><strong>{money(subtotal)}</strong></div>
          <div className="summary-row"><span>Delivery</span><strong>{money(deliveryFee)}</strong></div>
          <div className="summary-total"><span>Total</span><strong>{money(total)}</strong></div>
          <button className="btn btn-primary full-btn" onClick={() => navigate("/payment")}>Continue to payment <ArrowLeft size={17} className="rotate-180"/></button>
          <p className="checkout-disclaimer">By continuing, you agree to our terms and delivery policy.</p>
        </aside>
      </section>
    </div>
  );
}