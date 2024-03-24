import { BiXCircle } from "react-icons/bi";
import Link from "../Link";

function SideBar({ closeSideBar }: { closeSideBar: () => void }) {
  return (
    <aside className={`min-h-screen w-full fixed top-0 left-0 bg-slate-100`}>
      <div className="flex items-center justify-between p-4 mb-3">
        <h1 className="font-sans text-3xl font-bold tracking-wide uppercase">
          quick<span className="text-primary">eat</span>
        </h1>
        <BiXCircle
          className="text-red-600 text-4xl cursor-pointer hover:text-red-700 transition-all"
          onClick={closeSideBar}
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
  );
}

export default SideBar;
