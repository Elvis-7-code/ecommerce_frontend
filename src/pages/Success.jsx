import { CheckCircle2, PackageCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Success() {
  return (
    <div className="container success-page">
      <div className="success-icon"><CheckCircle2 size={52}/></div>
      <span className="eyebrow">Payment received</span>
      <h1>You're all set. 🎉</h1>
      <p>Your order has been placed successfully. We'll keep you updated as it moves through delivery.</p>
      <div className="success-card">
        <div><span>Order number</span><strong>#NGS-2026-09011</strong></div>
        <div><span>Payment</span><strong className="green-text">M-Pesa · Paid</strong></div>
        <div><span>Delivery</span><strong>Nairobi</strong></div>
      </div>
      <div className="success-actions"><Link to="/account" className="btn btn-primary">View my orders <ArrowRight size={17}/></Link><Link to="/shop" className="btn btn-ghost">Continue shopping</Link></div>
      <div className="order-track"><PackageCheck size={20}/><span>Order confirmed</span><i></i><span>Processing</span><i></i><span>Out for delivery</span></div>
    </div>
  );
}