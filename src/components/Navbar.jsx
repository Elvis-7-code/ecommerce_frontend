import {useState} from "react";
import {Link, Navlink, useNavigate} from "react-router-dom";
import {Search, ShoppingCart, UserRound, Menu, X} from "lucide-react";
import {useCart} from "../context/CartContext";

export default function Navbar() {
    const {itemCount} = useCart();
    const [open, setOpen] = useState("");
    const navigate = useNavigate();

     const submitSearch = (e) => {
    e.preventDefault();
    navigate(`/shop${search.trim() ? `?search=${encodeURIComponent(search.trim())}` : ""}`);
    setOpen(false);
  };

   return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark"><ShoppingCart size={19} /></span>
          <span>NextGen<span>Store</span></span>
        </Link>

        <form className="nav-search" onSubmit={submitSearch}>
          <Search size={17} />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products, brands and more..."
          />
          <button type="submit">Search</button>
        </form>

        <nav className={`nav-links ${open ? "is-open" : ""}`}>
          <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/shop" onClick={() => setOpen(false)}>Shop</NavLink>
          <a href="#categories" onClick={() => setOpen(false)}>Categories</a>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
        </nav>

        <div className="nav-actions">
          <Link to="/account" className="icon-button desktop-only" aria-label="Account">
            <UserRound size={20} />
          </Link>
          <Link to="/cart" className="cart-button" aria-label="Cart">
            <ShoppingCart size={20} />
            {itemCount > 0 && <span>{itemCount}</span>}
          </Link>
          <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
}