import { ReactNode } from "react";
import { Link } from "react-router-dom";

export default function NavLink({
  to,
  classNames,
  children,
}: {
  to: string;
  classNames?: string;
  children: ReactNode;
}) {
  return (
    <li className="hover:text-primary transition-all">
      <Link to={to} className={classNames}>
        {children}
      </Link>
    </li>
  );
}
