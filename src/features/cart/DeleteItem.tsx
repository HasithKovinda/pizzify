import { motion } from "framer-motion";
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
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`text-primary px-2 py-2 mt-3 text-left cursor-pointer rounded-lg tracking-wide text-${type ? "2xl" : "xl"} w-28 hover:bg-primary hover:text-white  transition-all`}
      onClick={() => dispatch(deleteItem({ pizzaId }))}
    >
      Remove
    </motion.button>
  );
}

export default DeleteItem;
