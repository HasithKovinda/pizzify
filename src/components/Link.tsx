import { type ReactNode } from "react";
import { Link as RouterLink } from "react-router-dom";

type LinkProps = {
  children: ReactNode;
  to: string;
};

function Link({ children, to }: LinkProps) {
  return (
    <RouterLink
      to={to}
      className="block uppercase text-lg py-3  tracking-wide hover:bg-primary hover:text-gray-100 hover:px-7 transition-all duration-200"
    >
      {children}
    </RouterLink>
  );
}

export default Link;
