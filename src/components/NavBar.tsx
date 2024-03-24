import { useState } from "react";
import { BiMenu, BiCart } from "react-icons/bi";
import SearchOrder from "../features/order/SearchOrder";
import useAppSelector from "../hooks/useAppSelector";
import NavLink from "./NavLink";
import { totalCartQuantity } from "../features/cart/cartSlice";
import SideBar from "./Home/SideBar";
import { AnimatePresence, motion } from "framer-motion";

function NavBar() {
  const userName = useAppSelector((state) => state.user.userName);
  const totalQuantity = useAppSelector((state) =>
    totalCartQuantity(state.cart.cart)
  );
  const [showSideBar, setShowSideBar] = useState(false);

  function openSideBar() {
    setShowSideBar(true);
  }

  function closeSideBar() {
    setShowSideBar(false);
  }

  return (
    <header>
      <nav className="md:flex md:items-center md:justify-between max-w-screen-2xl md:mx-auto px-12 py-3 relative">
        <div className="flex items-center justify-between py-4 md:p-0">
          <h1 className="font-sans text-3xl font-bold tracking-wide uppercase">
            quick<span className="text-primary">eat</span>
          </h1>
          <BiMenu
            className="text-primary text-4xl cursor-pointer hover:scale-110 transition-all md:hidden"
            onClick={openSideBar}
          />
        </div>
        <ul className="md:flex md:px-4 md:text-lg md:tracking-widest md:uppercase md:gap-x-2 lg:gap-x-14">
          <NavLink to="/" classNames="hidden md:block">
            Home
          </NavLink>
          <NavLink to="/menu" classNames="hidden md:block">
            Menu
          </NavLink>
          <NavLink to="/contact" classNames="hidden md:block">
            Contact
          </NavLink>
          <AnimatePresence>
            {totalQuantity ? (
              <motion.div
                className="fixed bottom-4 right-2 py-2 px-3 bg-primary z-40 shadow-xl rounded-lg "
                initial={{ opacity: 0, y: "-100%" }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: "-100%" }}
              >
                <NavLink to="/cart" classNames="flex  gap-3 text-white">
                  <span>Cart</span>
                  <BiCart className="text-2xl" />
                  <span>{totalQuantity}</span>
                </NavLink>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </ul>
        <div className="flex items-center text-zinc-600 gap-2">
          <SearchOrder />
          {userName && (
            <span className="hidden lg:inline-block lg:text-2xl lg:font-semibold lg:capitalize">
              {userName}
            </span>
          )}
        </div>
        {}
        <AnimatePresence>
          {showSideBar && <SideBar closeSideBar={closeSideBar} />}
        </AnimatePresence>
      </nav>
    </header>
  );
}

export default NavBar;
