import { BiMenu, BiXCircle } from "react-icons/bi";
import Link from "../components/Link";
import { useState } from "react";
function NavBar() {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <nav>
      <div className="flex items-center justify-between p-4">
        <h1 className="font-sans text-3xl font-bold tracking-wide uppercase">
          quick<span className="text-primary">eat</span>
        </h1>
        <BiMenu
          className="text-primary text-4xl cursor-pointer hover:scale-110 transition-all"
          onClick={() => setShowSideBar(true)}
        />
      </div>
      <aside
        className={`min-h-screen w-full fixed top-0 left-0 bg-slate-100 translate-x-[${showSideBar ? "0" : "-100%"}] ease-linear transition-all duration-300`}
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
            <Link name="Home" />
          </li>
          <li>
            <Link name="About" />
          </li>
          <li>
            <Link name="Contact" />
          </li>
          <li>
            <Link name="Order" />
          </li>
        </ul>
      </aside>
    </nav>
  );
}

export default NavBar;
