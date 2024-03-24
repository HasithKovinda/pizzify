import { Link } from "react-router-dom";
import useAppDispatch from "../../hooks/useAppDispatch";
import useAppSelector from "../../hooks/useAppSelector";
import CartItem from "./CartItem";
import { clearCart } from "./cartSlice";
import EmptyCart from "./EmptyCart";

function Cart() {
  const name = useAppSelector((state) => state.user.userName);
  const cart = useAppSelector((state) => state.cart.cart);
  const dispatch = useAppDispatch();

  if (!cart.length) return <EmptyCart />;

  return (
    <section className="px-12">
      <div className="max-w-2xl mx-auto">
        <Link
          to="/menu"
          className="text-primary text-xl  hover:text-orange-400 transition-colors mb-7 inline-block mt-7"
        >
          &larr; Back to menu
        </Link>
        <h2 className="font-semibold text-2xl mb-5">Your Cart {name}</h2>
        <article className="flex flex-col gap-4 divide-y divide-orange-400">
          {cart.map((cart) => {
            return <CartItem {...cart} key={cart.name} />;
          })}
        </article>
        <div className="mt-5">
          <button className="btn text-white p-2 rounded-lg mr-4">
            Order Pizzas
          </button>
          <button
            className="p-2 border border-primary rounded-lg"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>
        </div>
      </div>
    </section>
  );
}

export default Cart;
