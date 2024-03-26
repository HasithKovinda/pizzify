import { BiXCircle } from "react-icons/bi";
import Link from "./Link";
import { motion } from "framer-motion";
import Logo from "./Logo";
import SearchOrder from "../features/order/SearchOrder";

function SideBar({ closeSideBar }: { closeSideBar: () => void }) {
  return (
    <motion.aside
      className={`min-h-screen w-full fixed top-0 left-0 bg-slate-100 z-50`}
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ duration: 0.6, type: "spring" }}
    >
      <div className="flex items-center justify-between p-4 mb-3">
        <Logo />
        <BiXCircle
          className="text-red-600 text-4xl cursor-pointer hover:text-red-700 transition-all"
          onClick={closeSideBar}
        />
      </div>
      <ul className="flex flex-col  px-4">
        <li onClick={closeSideBar}>
          <Link to="/">Home</Link>
        </li>
        <li onClick={closeSideBar}>
          <Link to="/menu">Menu</Link>
        </li>
        <li onClick={closeSideBar}>
          <Link to="/contact">Contact</Link>
        </li>
        <SearchOrder type="small" hidden={false} search={closeSideBar} />
      </ul>
    </motion.aside>
  );
}

export default SideBar;
