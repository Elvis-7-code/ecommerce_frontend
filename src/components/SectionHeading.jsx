import { Link } from "react-router-dom";

export default function SectionHeading({ eyebrow, title, action = "View all →", to = "/shop" }) {
  return (
    <div className="section-heading">
      <div>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2>{title}</h2>
      </div>
      <Link to={to}>{action}</Link>
    </div>
  );
}