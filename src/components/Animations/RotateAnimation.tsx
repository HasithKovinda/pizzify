import { useInView, useAnimation, motion } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";

function RotateAnimation({
  children,
  classNames,
}: {
  children: ReactNode;
  classNames?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animation = useAnimation();

  useEffect(() => {
    if (isInView) {
      animation.start("visible");
    }
  }, [isInView]);
  return (
    <motion.section
      className={classNames}
      ref={ref}
      variants={{
        hidden: { transform: "perspective(2500px) rotateX(-100deg)" },
        visible: { transform: "perspective(2500px) rotateX(0)" },
      }}
      initial="hidden"
      animate={animation}
      transition={{ duration: 0.7 }}
    >
      {children}
    </motion.section>
  );
}

export default RotateAnimation;
