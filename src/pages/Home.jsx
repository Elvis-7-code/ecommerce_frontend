import { ArrowRight, Bike, ShieldCheck, Truck, RotateCcw, Zap, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { categories, products } from "../data/products";
import ProductCard from "../components/ProductCard";
import SectionHeading from "../components/SectionHeading";

export default function Home() {
  const featured = products.slice(0, 8);

  return (
    <>
      <section className="hero">
        <div className="hero-orb orb-one" />
        <div className="hero-orb orb-two" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="hero-kicker"><Zap size={15} /> Nairobi's everyday store</span>
            <h1>Everything you need.<br /><em>In one place.</em></h1>
            <p>
              From electric bikes and speakers to kitchen essentials, fashion and personal care —
              shop quality products without the hassle.
            </p>
            <div className="hero-actions">
              <Link to="/shop" className="btn btn-primary">Shop now <ArrowRight size={18} /></Link>
              <a href="#categories" className="btn btn-ghost">Explore categories</a>
            </div>
            <div className="hero-mini-stats">
              <div><strong>500+</strong><span>Products</span></div>
              <div><strong>24/7</strong><span>Order online</span></div>
              <div><strong>1–2 Days</strong><span>Nairobi delivery</span></div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-main-card">
              <img src="https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=1100&q=90" alt="Electric bicycle" />
              <div className="hero-product-label">
                <span>Featured ride</span>
                <strong>Urban E-Bike</strong>
                <b>KSh 85,000</b>
              </div>
            </div>
            <div className="floating-card floating-delivery">
              <span className="float-icon"><Truck size={18} /></span>
              <div><strong>Fast delivery</strong><small>Across Nairobi</small></div>
            </div>
            <div className="floating-card floating-payment">
              <span className="float-icon mpesa-icon">M</span>
              <div><strong>M-Pesa ready</strong><small>Secure checkout</small></div>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-strip">
        <div className="container trust-grid">
          <div><span className="trust-icon"><Truck size={19} /></span><div><strong>Fast Nairobi delivery</strong><small>Distance-based charges</small></div></div>
          <div><span className="trust-icon"><ShieldCheck size={19} /></span><div><strong>Secure payments</strong><small>M-Pesa & card ready</small></div></div>
          <div><span className="trust-icon"><RotateCcw size={19} /></span><div><strong>Easy returns</strong><small>Simple return process</small></div></div>
          <div><span className="trust-icon"><Zap size={19} /></span><div><strong>Great prices</strong><small>Deals every week</small></div></div>
        </div>
      </section>

      <section id="categories" className="section">
        <div className="container">
          <SectionHeading eyebrow="Browse by category" title="Shop what you need" />
          <div className="category-grid">
            {categories.map((cat) => (
              <Link key={cat.id} to={`/shop?category=${cat.id}`} className="category-card">
                <span>{cat.icon}</span>
                <strong>{cat.name}</strong>
                <ChevronRight size={16} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container">
          <SectionHeading eyebrow="Handpicked for you" title="Featured products" />
          <div className="product-grid">
            {featured.map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
        </div>
      </section>

      <section className="deal-banner">
        <div className="container deal-inner">
          <div>
            <span className="eyebrow">This week's deal</span>
            <h2>Gear up without breaking the bank.</h2>
            <p>Save on selected bikes, electronics and everyday essentials.</p>
          </div>
          <Link to="/shop" className="btn btn-light">Shop deals <ArrowRight size={17} /></Link>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container about-grid">
          <div className="about-photo">
            <img src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1000&q=85" alt="Shopping experience" />
            <div className="about-badge"><strong>100%</strong><span>Customer focused</span></div>
          </div>
          <div className="about-copy">
            <span className="eyebrow">Why NextGen Store?</span>
            <h2>More than a store. It's your everyday shortcut.</h2>
            <p>We bring useful products from different categories into one simple online shopping experience built for Kenya.</p>
            <ul>
              <li><span>01</span><div><strong>Wide selection</strong><p>Bikes, electronics, home goods, fashion, personal care and more.</p></div></li>
              <li><span>02</span><div><strong>Local delivery</strong><p>Know your delivery cost before you pay, based on your Nairobi distance.</p></div></li>
              <li><span>03</span><div><strong>Easy checkout</strong><p>Pay with M-Pesa and get clear order updates from checkout to delivery.</p></div></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}