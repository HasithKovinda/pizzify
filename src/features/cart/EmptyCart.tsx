import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const cart = React.forwardRef<HTMLDivElement>(function EmptyCart(_, ref) {
  return (
    <div ref={ref} className="px-4 py-3 text-center">
      <Link to="/menu" className="hover:text-primary transition-colors">
        &larr; Back to menu
      </Link>

      <p className="mt-7 font-semibold">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
});
const EmptyCart = motion(cart, { forwardMotionProps: true });
export default EmptyCart;
