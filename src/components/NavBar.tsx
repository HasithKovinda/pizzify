import { BiMenu, BiXCircle } from "react-icons/bi";
import Link from "./Link";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import SearchOrder from "../features/order/SearchOrder";
function NavBar() {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <nav className="md:flex md:items-center md:justify-between max-w-screen-2xl md:mx-auto px-12  py-3">
      <div className="flex items-center justify-between py-4 md:p-0">
        <h1 className="font-sans text-3xl font-bold tracking-wide uppercase">
          quick<span className="text-primary">eat</span>
        </h1>
        <BiMenu
          className="text-primary text-4xl cursor-pointer hover:scale-110 transition-all md:hidden"
          onClick={() => setShowSideBar(true)}
        />
      </div>
      <ul className="hidden  md:flex md:px-4 md:text-lg md:tracking-widest md:uppercase md:gap-x-2 lg:gap-x-14">
        <li className="hover:text-primary transition-all">
          <a href="#">Home</a>
        </li>
        <li className="hover:text-primary transition-all">
          <RouterLink to="menu">Menu</RouterLink>
          {/* <a href="#">About</a> */}
        </li>
        <li className="hover:text-primary transition-all">
          <a href="#">Contact</a>
        </li>
        <li className="hover:text-primary transition-all">
          <a href="#">Order</a>
        </li>
      </ul>
      <div className="flex items-center text-zinc-600 gap-2">
        <SearchOrder />
        {/* <span className="text-2xl font-semibold capitalize">
          Hasith Kovinda
        </span> */}
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
  );
}

export default NavBar;
