import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Smartphone, Copy, Info } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function Payment() {
  const { subtotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [method, setMethod] = useState("stk");
  const [sent, setSent] = useState(false);
  const delivery = subtotal > 0 ? 500 : 0;
  const total = subtotal + delivery;

  const pay = () => {
    if (method === "stk") {
      setSent(true);
      setTimeout(() => { clearCart(); navigate("/success"); }, 1200);
    } else {
      clearCart();
      navigate("/success");
    }
  };

  return (
    <div className="page payment-page">
      <div className="container payment-head"><Link to="/checkout"><ArrowLeft size={17}/> Back to checkout</Link></div>
      <section className="container payment-layout">
        <div className="payment-main">
          <span className="eyebrow">Secure checkout</span>
          <h1>Complete your payment</h1>
          <p className="payment-lead">Choose how you'd like to pay for your order.</p>

          <div className="payment-tabs"><button className={method==="stk"?"active":""} onClick={() => setMethod("stk")}><Smartphone size={18}/> M-Pesa STK Push</button><button className={method==="till"?"active":""} onClick={() => setMethod("till")}>M-Pesa Till Number</button></div>

          {method === "stk" ? (
            <div className="mpesa-box">
              <div className="mpesa-big">M<span>-</span>PESA</div>
              <h2>Pay with your phone</h2>
              <p>Enter your M-Pesa number and we'll send a payment prompt directly to your phone.</p>
              <label>Safaricom phone number<input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="07XX XXX XXX"/></label>
              <div className="amount-display"><span>Amount to pay</span><strong>KSh {total.toLocaleString()}</strong></div>
              {sent ? <div className="prompt-sent"><CheckCircle2 size={22}/><div><strong>Payment prompt sent!</strong><span>Check your phone and enter your M-Pesa PIN.</span></div></div> : <button className="btn btn-primary full-btn" onClick={pay}>Send M-Pesa prompt</button>}
              <div className="info-box"><Info size={17}/><span>In production, this button will call your Flask backend, which will securely initiate the Safaricom Daraja STK Push.</span></div>
            </div>
          ) : (
            <div className="mpesa-box">
              <div className="mpesa-big">M<span>-</span>PESA</div>
              <h2>Pay via Till Number</h2>
              <p>Use Lipa na M-Pesa → Buy Goods and Services on your phone.</p>
              <div className="till-display"><span>Our Till Number</span><strong>123456</strong><button onClick={() => navigator.clipboard?.writeText("123456")}><Copy size={16}/> Copy</button></div>
              <ol className="payment-steps"><li>Open M-Pesa on your phone</li><li>Select <strong>Lipa na M-Pesa</strong></li><li>Select <strong>Buy Goods and Services</strong></li><li>Enter till number <strong>123456</strong></li><li>Enter <strong>KSh {total.toLocaleString()}</strong></li><li>Enter your M-Pesa PIN</li></ol>
              <button className="btn btn-primary full-btn" onClick={pay}>I've completed payment</button>
              <div className="info-box"><Info size={17}/><span>Production version will verify the payment from the backend before marking the order as paid.</span></div>
            </div>
          )}
        </div>

        <aside className="payment-summary">
          <span>Order total</span><strong>KSh {total.toLocaleString()}</strong>
          <div><span>Items</span><b>KSh {subtotal.toLocaleString()}</b></div>
          <div><span>Delivery</span><b>KSh {delivery.toLocaleString()}</b></div>
          <hr/><small>Order #NGS-2026-09011</small>
        </aside>
      </section>
    </div>
  );
}