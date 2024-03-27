import { BiBell } from "react-icons/bi";
import subscribe from "../../asserts/subscribe.png";
import Button from "../Button";
import RotateAnimation from "../Animations/RotateAnimation";
import { useState } from "react";
function Subscribe() {
  const [email, setEmail] = useState("");
  function handleClick() {
    setEmail("");
  }
  return (
    <RotateAnimation classNames="max-w-screen-2xl mx-auto mt-20 px-12 lg:flex lg:items-center lg:gap-8 h-full">
      <div>
        <img src={subscribe} alt="subscribe" className="block mx-auto" />
      </div>
      <div className="w-full mt-8 md:mt-8 mx-auto max-w-xl">
        <h1 className="heading text-4xl xl:text-6xl capitalize">
          Get the menu of your favorite restaurants every day
        </h1>

        <div className="mt-10 flex flex-col md:flex-row items-center md:relative max-w-lg">
          <BiBell className="absolute top-1/2 translate-y-[-50%] left-3 text-gray-400 text-xl" />
          <input
            type="text"
            placeholder="Enter Email Address"
            className="text-xl py-4 px-10 shadow-xl placeholder:text-gray-400 placeholder:text-xl focus:outline-none focus:ring focus:ring-yellow-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="mt-4 md:mt-0">
            <Button name="Subscribe" onClick={handleClick} />
          </div>
        </div>
      </div>
    </RotateAnimation>
  );
}

export default Subscribe;
