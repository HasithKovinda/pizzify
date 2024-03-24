import useAppSelector from "../../hooks/useAppSelector";
import CartItem from "./CartItem";

function Cart() {
  const name = useAppSelector((state) => state.user.userName);
  const cart = useAppSelector((state) => state.cart.cart);
  return (
    <section className="px-12">
      <div className="max-w-2xl mx-auto">
        <button className="text-primary text-xl mb-5">
          &larr; Back to menu
        </button>
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
          <button className="p-2 border border-primary rounded-lg">
            Clear Cart
          </button>
        </div>
      </div>
    </section>
  );
}

export default Cart;
