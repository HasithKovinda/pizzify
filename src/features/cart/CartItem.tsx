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
      className="sm:flex sm:items-center px-4 py-2 sm:w-full sm:m-0 sm:justify-between sm:p-4 bg-slate-100 rounded-lg shadow-lg"
    >
      <div className="tracking-wide mb-3 px-2 sm:px-0 sm:mb-0">
        <span>{name}</span>
        <span>&times;</span>
        <span>{quantity}</span>
      </div>

      <div className="sm:flex sm:items-center sm:gap-3 px-2 sm:px-0">
        <UpdateQuantity pizzaId={pizzaId} currentQuantity={currentQuantity} />
        <span className="font-semibold mt-3 mb-3 inline-block">
          {formatCurrency(totalPrice)}
        </span>
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </motion.div>
  );
}

export default CartItem;
