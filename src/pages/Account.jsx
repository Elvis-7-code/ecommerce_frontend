import { Link } from "react-router-dom";
import { LayoutDashboard, Package, Heart, MapPin, UserRound, LogOut, ChevronRight } from "lucide-react";

const orders = [
  { id: "#NGS-2026-09008", amount: "KSh 12,600", status: "Delivered", date: "Sep 07, 2026" },
  { id: "#NGS-2026-09011", amount: "KSh 97,200", status: "Processing", date: "Sep 11, 2026" },
  { id: "#NGS-2026-09002", amount: "KSh 8,700", status: "Delivered", date: "Sep 02, 2026" },
];

export default function Account() {
  return (
    <div className="page">
      <div className="container account-layout">
        <aside className="account-sidebar">
          <div className="account-user"><div className="avatar">JK</div><div><strong>John Kamau</strong><span>john@example.com</span></div></div>
          <nav>
            <a className="active"><LayoutDashboard size={17}/> Dashboard</a>
            <a><Package size={17}/> My orders</a>
            <a><Heart size={17}/> Wishlist</a>
            <a><MapPin size={17}/> Addresses</a>
            <a><UserRound size={17}/> Profile</a>
            <a><LogOut size={17}/> Logout</a>
          </nav>
        </aside>
        <main className="account-main">
          <div className="account-welcome"><div><span className="eyebrow">My account</span><h1>Hello, John 👋</h1><p>Here's a quick overview of your shopping activity.</p></div><Link to="/shop" className="btn btn-primary">Shop now</Link></div>
          <div className="account-stats"><div><span>Total orders</span><strong>12</strong></div><div><span>Pending</span><strong>1</strong></div><div><span>Delivered</span><strong>10</strong></div><div><span>Total spent</span><strong>KSh 82.4k</strong></div></div>
          <div className="account-section"><div className="section-heading"><h2>Recent orders</h2><a href="#all">View all →</a></div><div className="orders-table">
            {orders.map(o => <div className="order-row" key={o.id}><div className="order-icon"><Package size={18}/></div><div><strong>{o.id}</strong><span>{o.date}</span></div><strong>{o.amount}</strong><span className={`status ${o.status.toLowerCase()}`}>{o.status}</span><ChevronRight size={17}/></div>)}
          </div></div>
        </main>
      </div>
    </div>
  );
}