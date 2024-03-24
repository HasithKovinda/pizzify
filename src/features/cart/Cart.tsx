import { Link } from "react-router-dom";
import useAppDispatch from "../../hooks/useAppDispatch";
import useAppSelector from "../../hooks/useAppSelector";
import CartItem from "./CartItem";
import { clearCart } from "./cartSlice";
import EmptyCart from "./EmptyCart";
import { AnimatePresence, motion } from "framer-motion";

function Cart() {
  const name = useAppSelector((state) => state.user.userName);
  const cart = useAppSelector((state) => state.cart.cart);
  const dispatch = useAppDispatch();

  if (!cart.length)
    return (
      <AnimatePresence>
        <EmptyCart
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          key="empty"
        />
      </AnimatePresence>
    );

  return (
    <section className="px-12">
      <div className=" lg:min-h-screen">
        <div className="max-w-2xl mx-auto">
          <Link
            to="/menu"
            className="text-primary text-xl  hover:text-orange-400 transition-colors mb-7 inline-block mt-7 lg:mb-20"
          >
            &larr; Back to menu
          </Link>
          <h2 className="font-semibold text-2xl mb-5">Your Cart {name}</h2>
          <AnimatePresence mode="wait">
            <motion.article
              key="cartList"
              exit={{ opacity: 0, x: "100%" }}
              className="flex flex-col gap-8 mb-8"
            >
              {cart.length > 0 && (
                <AnimatePresence>
                  {cart.map((cart) => {
                    return <CartItem {...cart} key={cart.name} />;
                  })}
                </AnimatePresence>
              )}
            </motion.article>
          </AnimatePresence>

          <div>
            <button className="btn text-white p-2 border rounded-lg mr-4 hover:text-primary hover:border-primary transition-all">
              Order Pizzas
            </button>
            <button
              className="p-2 border border-primary rounded-lg text-zinc-900 font-semibold hover:text-primary transition-colors"
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
