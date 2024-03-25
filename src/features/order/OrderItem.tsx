import { Cart } from "../../types/pizza";
import { formatCurrency } from "../../utils/helpers";

function OrderItem({ item }: { item: Cart }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="py-3 mb-1">
      <div className="flex items-center justify-between p-4 bg-slate-100 rounded-lg shadow-lg lg:text-xl">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;
