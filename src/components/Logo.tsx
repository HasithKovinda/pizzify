import { Link } from "react-router-dom";

export default function Logo({ type = "light" }: { type?: "light" | "dark" }) {
  return (
    <Link to="/">
      <h1
        className={`${type == "dark" ? "text-white" : ""} font-sans text-3xl font-bold tracking-wide uppercase`}
      >
        Pizz<span className="text-primary">ify</span>
      </h1>
    </Link>
  );
}
