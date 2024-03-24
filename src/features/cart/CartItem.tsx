import { motion } from "framer-motion";
import { Cart } from "../../types/pizza";
import { formatCurrency } from "../../utils/helpers";
import DeleteItem from "./DeleteItem";

function CartItem(cart: Cart) {
  const { pizzaId, name, quantity, totalPrice } = cart;
  return (
    <motion.div
      layout
      exit={{ opacity: 0, x: "100%" }}
      className="flex items-center justify-between p-4 bg-slate-100 rounded-lg shadow-lg"
    >
      <div className="tracking-wide">
        <span>{name}</span>
        <span>&times;</span>
        <span>{quantity}</span>
      </div>
      <div className="space-x-2">
        <span className="font-semibold">{formatCurrency(totalPrice)}</span>
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </motion.div>
  );
}

export default CartItem;
