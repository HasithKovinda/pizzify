import { BiBell } from "react-icons/bi";
import subscribe from "../asserts/subscribe.png";
function Subscribe() {
  return (
    <section className="max-w-screen-2xl mx-auto mt-20 px-14 lg:flex lg:items-center lg:gap-8">
      <div>
        <img src={subscribe} alt="subscribe" />
      </div>
      <div className="w-full mt-8 md:mt-8 mx-auto">
        <h1 className="heading ">
          Get the menu of your favorite restaurants every day
        </h1>

        <div className="mt-10 flex items-center relative">
          <BiBell className="absolute top-1/2 translate-y-[-50%] left-3 text-gray-400 text-xl" />
          <input
            type="text"
            placeholder="Enter Email Address"
            className="text-xl py-4 px-10 shadow-xl placeholder:text-gray-400 placeholder:text-xl focus:outline-none focus:ring focus:ring-yellow-500"
          />
          {/* <button className="btn text-wxl text-white uppercase border border-primary py-4 px-3 hover:text-primary">
          Subscribe
        </button> */}
          <button
            className=" text-2xl btn text-white tracking-wide uppercase border border-primary py-4 px-6 hover:text-primary shadow-xl 
         focus:bg-yellow-500  focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-offset-2 "
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
