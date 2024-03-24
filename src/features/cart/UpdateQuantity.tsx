import useAppDispatch from "../../hooks/useAppDispatch";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

function UpdateQuantity({
  pizzaId,
  currentQuantity,
}: {
  pizzaId: number;
  currentQuantity: number;
}) {
  const dispatch = useAppDispatch();
  const style =
    "text-xl h-8 w-8 rounded-full bg-primary transition-colors duration-300 hover:bg-orange-400 focus:bg-orange-400 focus:outline-none focus:ring focus:ring-orange-400 focus:ring-offset-2 disabled:cursor-not-allowed";
  return (
    <div className="flex items-center gap-3">
      <button
        className={style}
        onClick={() => dispatch(decreaseItemQuantity({ pizzaId }))}
      >
        -
      </button>
      <span className="font-medium">{currentQuantity}</span>
      <button
        className={style}
        onClick={() => dispatch(increaseItemQuantity({ pizzaId }))}
      >
        +
      </button>
    </div>
  );
}

export default UpdateQuantity;
