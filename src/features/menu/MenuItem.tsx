import { Cart, type MenuType } from "../../types/pizza";
import { formatCurrency } from "../../utils/helpers";
import useAppSelector from "../../hooks/useAppSelector";
import useAppDispatch from "../../hooks/useAppDispatch";
import { addItem, getCurrentQualityById } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import { motion } from "framer-motion";
import UpdateQuantity from "../cart/UpdateQuantity";

type MenuItemProps = {
  handleModelOpen: () => void;
} & MenuType;

function MenuItem({
  id,
  name,
  imageUrl,
  ingredients,
  soldOut,
  unitPrice,
  handleModelOpen,
}: MenuItemProps) {
  const userName = useAppSelector((state) => state.user.userName);
  const dispatch = useAppDispatch();

  function handleAddCart() {
    if (!userName) {
      handleModelOpen();
      return;
    }
    const newItem: Cart = {
      pizzaId: id,
      name,
      unitPrice,
      quantity: 1,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }
  const currentQuantity = useAppSelector((state) =>
    getCurrentQualityById(id, state.cart.cart)
  );
  const isInCart = currentQuantity > 0;
  return (
    <motion.div
      className="flex items-start gap-3"
      variants={{
        initial: { opacity: 0, x: "-100%" },
        animate: { opacity: 1, x: 0 },
      }}
    >
      <img
        src={imageUrl}
        alt={name}
        className={`${soldOut ? "grayscale" : ""}  rounded-lg `}
      />
      <div className="flex flex-col justify-between h-full">
        <div className="space-y-1">
          <p className="text-2xl tracking-wider font-semibold">{name}</p>
          <div className="space-x-2">
            <span className="text-md text-zinc-600 italic text-wrap">
              {ingredients.join(", ")}
            </span>
          </div>
          <p className="text-3xl text-primary">{formatCurrency(unitPrice)}</p>
        </div>

        {soldOut ? (
          <p className="uppercase text-slate-400 text-xl font-semibold">
            sold out
          </p>
        ) : isInCart ? (
          <div>
            <UpdateQuantity pizzaId={id} currentQuantity={currentQuantity} />
            <DeleteItem pizzaId={id} />
          </div>
        ) : (
          <button
            className="btn px-2 py-2 text-white border border-primary rounded-xl w-32 hover:text-primary hover:border-primary"
            onClick={handleAddCart}
          >
            Add to Cart
          </button>
        )}
      </div>
    </motion.div>
  );
}

export default MenuItem;
