import useAppDispatch from "../../hooks/useAppDispatch";
import { deleteItem } from "./cartSlice";

function DeleteItem({
  pizzaId,
  size = "small",
}: {
  pizzaId: number;
  size?: "small" | "large";
}) {
  const type = size === "large";
  const dispatch = useAppDispatch();
  return (
    <button
      className={`text-primary px-2 py-2 text-left cursor-pointer rounded-lg tracking-wide text-${type ? "2xl" : "xl"} w-32 hover:bg-primary hover:text-white  transition-all`}
      onClick={() => dispatch(deleteItem({ pizzaId }))}
    >
      Remove
    </button>
  );
}

export default DeleteItem;
