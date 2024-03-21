import { useInView, useAnimation, motion } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";

function FloatAnimation({ children }: { children: ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const animation = useAnimation();

  useEffect(() => {
    if (isInView) {
      animation.start("visible");
    }
  }, [isInView]);
  return (
    <motion.section
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={animation}
      transition={{ duration: 2 }}
    >
      {children}
    </motion.section>
  );
}

export default FloatAnimation;
