// import { useInView, motion, useAnimation } from "framer-motion";
// import { useRef, useEffect } from "react";
import hero from "../asserts/hero.png";
import FloatAnimation from "../components/Animations/FloatAnimation";
import Button from "../components/Button";

function Hero() {
  // const ref = useRef(null);
  // const isInView = useInView(ref);
  // const animation = useAnimation();

  // useEffect(() => {
  //   if (isInView) {
  //     animation.start("visible");
  //   }
  // }, [isInView]);
  return (
    <FloatAnimation>
      <div className="max-w-screen-2xl px-12 md:flex md:items-center md:justify-between mx-auto">
        <div className="max-w-lg">
          <h1 className="text-gray-800 text-6xl uppercase font-extrabold leading-snug">
            The Best Restaurants In Your Home
          </h1>
          <p className="text-slate-500 mt-5 mb-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla,
            aliquam cumque? Accusamus dicta commodi eveniet quo expedita cumque
            sed eum.
          </p>
          <Button name="order now" />
        </div>
        <img
          src={hero}
          alt="hero-image"
          className="mt-16 block mx-auto h-96 w-96 lg:h-[720px] lg:w-[500px] xl:w-[680px] object-cover"
        />
      </div>
    </FloatAnimation>
  );
}

export default Hero;
