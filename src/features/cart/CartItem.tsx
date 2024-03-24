import { Cart } from "../../types/pizza";
import { formatCurrency } from "../../utils/helpers";
import DeleteItem from "./DeleteItem";

function CartItem(cart: Cart) {
  const { pizzaId, name, quantity, totalPrice } = cart;
  return (
    <div className="flex items-center justify-between py-4">
      <div className="tracking-wide">
        <span>{name}</span>
        <span>&times;</span>
        <span>{quantity}</span>
      </div>
      <div className="space-x-2">
        <span className="font-semibold">{formatCurrency(totalPrice)}</span>
        <DeleteItem pizzaId={pizzaId} size="large" />
      </div>
    </div>
  );
}

export default CartItem;
