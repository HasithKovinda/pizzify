import { useState } from "react";
import { BiMenu, BiXCircle, BiCart } from "react-icons/bi";
import Link from "./Link";
import SearchOrder from "../features/order/SearchOrder";
import useAppSelector from "../hooks/useAppSelector";
import NavLink from "./NavLink";
import { totalCartQuantity } from "../features/cart/cartSlice";

function NavBar() {
  const userName = useAppSelector((state) => state.user.userName);
  const totalQuantity = useAppSelector((state) =>
    totalCartQuantity(state.cart.cart)
  );
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <header>
      <nav className="md:flex md:items-center md:justify-between max-w-screen-2xl md:mx-auto px-12 py-3 relative">
        <div className="flex items-center justify-between py-4 md:p-0">
          <h1 className="font-sans text-3xl font-bold tracking-wide uppercase">
            quick<span className="text-primary">eat</span>
          </h1>
          <BiMenu
            className="text-primary text-4xl cursor-pointer hover:scale-110 transition-all md:hidden"
            onClick={() => setShowSideBar(true)}
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
          {totalQuantity ? (
            <div className="fixed bottom-4 right-2 py-2 px-3 bg-primary z-40 shadow-xl rounded-lg ">
              <NavLink to="/cart" classNames="flex  gap-3 text-white">
                <span>Cart</span>
                <BiCart className="text-2xl" />
                <span>{totalQuantity}</span>
              </NavLink>
            </div>
          ) : null}
        </ul>
        <div className="flex items-center text-zinc-600 gap-2">
          <SearchOrder />
          {userName && (
            <span className="hidden lg:inline-block lg:text-2xl lg:font-semibold lg:capitalize">
              {userName}
            </span>
          )}
        </div>
        <aside
          className={`min-h-screen w-full fixed top-0 left-0 bg-slate-100 ${showSideBar ? "translate-x-0" : "translate-x-[-100%]"} ease-linear transition-all duration-300`}
        >
          <div className="flex items-center justify-between p-4 mb-3">
            <h1 className="font-sans text-3xl font-bold tracking-wide uppercase">
              quick<span className="text-primary">eat</span>
            </h1>
            <BiXCircle
              className="text-red-600 text-4xl cursor-pointer hover:text-red-700 transition-all"
              onClick={() => setShowSideBar(false)}
            />
          </div>
          <ul className="flex flex-col  px-4">
            <li>
              <Link name="Home" to="/" />
            </li>
            <li>
              <Link name="About" to="about" />
            </li>
            <li>
              <Link name="Contact" to="contact" />
            </li>
            <li>
              <Link name="Order" to="order" />
            </li>
          </ul>
        </aside>
      </nav>
    </header>
  );
}

export default NavBar;
