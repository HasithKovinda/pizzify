import { useInView, useAnimation, motion } from "framer-motion";
import { useRef, useEffect } from "react";
import { type featuresType } from "../data/data";

function Feature({ image, title, featureNumber, content }: featuresType) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const animation = useAnimation();

  useEffect(() => {
    if (isInView) {
      animation.start("visible");
    }
  }, [isInView]);
  return (
    <motion.div
      className="mt-8 "
      ref={ref}
      variants={{
        hidden: { transform: "perspective(2500px) rotateX(-100deg)" },
        visible: { transform: "perspective(2500px) rotateX(0)" },
      }}
      initial="hidden"
      animate={animation}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <img
        src={image}
        alt="how it works illustration one"
        className="mb-3 block mx-auto"
      />
      <p className="text-center">
        <span className="text-gray-400 text-4xl font-bold">
          {featureNumber}&nbsp;
        </span>
        <span className="text-2xl font-semibold">{title}</span>
      </p>
      <p className="text-slate-500 mt-4">{content}</p>
    </motion.div>
  );
}

export default Feature;
