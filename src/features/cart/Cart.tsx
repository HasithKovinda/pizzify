import useUserSelector from "../../hooks/useAppSelector";
import CartItem from "./CartItem";

function Cart() {
  const fakeCart = [
    {
      pizzaId: 12,
      name: "Mediterranean",
      quantity: 2,
      unitPrice: 16,
      totalPrice: 32,
    },
    {
      pizzaId: 6,
      name: "Vegetale",
      quantity: 1,
      unitPrice: 13,
      totalPrice: 13,
    },
    {
      pizzaId: 11,
      name: "Spinach and Mushroom",
      quantity: 1,
      unitPrice: 15,
      totalPrice: 15,
    },
  ];
  const name = useUserSelector((state) => state.user.userName);
  return (
    <section className="px-12">
      <div className="max-w-2xl mx-auto">
        <button className="text-primary text-xl mb-5">
          &larr; Back to menu
        </button>
        <h2 className="font-semibold text-2xl mb-5">Your Cart {name}</h2>
        <article className="flex flex-col gap-4 divide-y divide-orange-400">
          {fakeCart.map((cart) => {
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
