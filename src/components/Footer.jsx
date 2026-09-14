import {} from "react-router-dom";
import {Facebook, Instagram, MessageCircle, MapPin, Phone, Mail} from "lucide-react";  

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="brand">
            <span className="brand-mark"><span>NG</span></span>
            <span>NextGen<span>Store</span></span>
          </Link>
          <p>Everything you need, all in one place. Quality products, fair prices and reliable Nairobi delivery.</p>
          <div className="socials">
            <a href="#facebook" aria-label="Facebook"><Facebook size={17} /></a>
            <a href="#instagram" aria-label="Instagram"><Instagram size={17} /></a>
            <a href="#whatsapp" aria-label="WhatsApp"><MessageCircle size={17} /></a>
          </div>
        </div>

        <div>
          <h4>Shop</h4>
          <Link to="/shop?category=bikes">Bikes & Scooters</Link>
          <Link to="/shop?category=electronics">Electronics</Link>
          <Link to="/shop?category=home">Home & Kitchen</Link>
          <Link to="/shop?category=fashion">Fashion</Link>
        </div>

        <div>
          <h4>Customer Care</h4>
          <a href="#shipping">Delivery & Shipping</a>
          <a href="#returns">Returns & Refunds</a>
          <a href="#terms">Terms & Conditions</a>
          <a href="#faq">FAQs</a>
        </div>

        <div>
          <h4>Get in touch</h4>
          <p className="contact-line"><MapPin size={16} /> Nairobi, Kenya</p>
          <p className="contact-line"><Phone size={16} /> +254 7XX XXX XXX</p>
          <p className="contact-line"><Mail size={16} /> hello@nextgenstore.co.ke</p>
          <div className="payment-pills">
            <span>M-PESA</span><span>VISA</span><span>MC</span>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} NextGen Store. All rights reserved.</span>
        <span>Built for Kenya 🇰🇪</span>
      </div>
    </footer>
  );
}