import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div className="px-4 py-3 text-center">
      <Link to="/menu" className="hover:text-primary transition-colors">
        &larr; Back to menu
      </Link>

      <p className="mt-7 font-semibold">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
