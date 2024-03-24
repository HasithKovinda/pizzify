import { motion } from "framer-motion";
import { Cart } from "../../types/pizza";
import { formatCurrency } from "../../utils/helpers";
import DeleteItem from "./DeleteItem";
import UpdateQuantity from "./UpdateQuantity";
import useAppSelector from "../../hooks/useAppSelector";
import { getCurrentQualityById } from "./cartSlice";

function CartItem(cart: Cart) {
  const { pizzaId, name, quantity, totalPrice } = cart;
  const currentQuantity = useAppSelector((state) =>
    getCurrentQualityById(pizzaId, state.cart.cart)
  );
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

      <div className="flex items-center gap-3">
        <UpdateQuantity pizzaId={pizzaId} currentQuantity={currentQuantity} />
        <span className="font-semibold">{formatCurrency(totalPrice)}</span>
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </motion.div>
  );
}

export default CartItem;
