import { BarChart3, Boxes, CreditCard, LayoutDashboard, Package, Settings, ShoppingBag, Truck, Users, TrendingUp, ArrowUpRight } from "lucide-react";
import { products } from "../data/products";

const recent = [
  ["#NGS-09011", "John Kamau", "KSh 97,200", "Processing"],
  ["#NGS-09010", "Mary Wanjiku", "KSh 6,500", "Delivered"],
  ["#NGS-09009", "Brian Otieno", "KSh 22,300", "Delivered"],
  ["#NGS-09008", "Faith Njeri", "KSh 15,400", "Pending"],
];

export default function Admin() {
  return (
    <div className="admin-page">
      <aside className="admin-sidebar">
        <div className="admin-logo"><span>NG</span><strong>NextGen<span>Store</span></strong></div>
        <nav>
          <a className="active"><LayoutDashboard size={18}/> Dashboard</a><a><Package size={18}/> Products</a><a><ShoppingBag size={18}/> Orders</a><a><Boxes size={18}/> Inventory</a><a><Users size={18}/> Customers</a><a><CreditCard size={18}/> Payments</a><a><Truck size={18}/> Deliveries</a><a><BarChart3 size={18}/> Reports</a>
        </nav>
        <a className="admin-settings"><Settings size={18}/> Settings</a>
      </aside>
      <main className="admin-main"></main>