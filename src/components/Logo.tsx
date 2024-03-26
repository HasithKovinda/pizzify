import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/">
      <h1 className="font-sans text-3xl font-bold tracking-wide uppercase">
        quick<span className="text-primary">eat</span>
      </h1>
    </Link>
  );
}
