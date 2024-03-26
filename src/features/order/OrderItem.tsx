import { Cart } from "../../types/pizza";
import { formatCurrency } from "../../utils/helpers";

function OrderItem({
  item,
  isLoadingIngredients,
  ingredients,
}: {
  item: Cart;
  isLoadingIngredients: boolean;
  ingredients: string[];
}) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="py-3 mb-1">
      <div className="flex items-center justify-between p-4 bg-slate-100 rounded-lg shadow-lg lg:text-xl">
        <div>
          <p>
            <span className="font-bold">{quantity}&times;</span> {name}
          </p>
          <p className="text-sm italic capitalize text-stone-500">
            {isLoadingIngredients ? "Loading..." : ingredients.join(", ")}
          </p>
        </div>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;
