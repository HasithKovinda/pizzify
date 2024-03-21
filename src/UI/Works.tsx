import { useInView, motion, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import Feature from "../components/Feature";
import { features } from "../data/data";

function Works() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const animation = useAnimation();

  useEffect(() => {
    if (isInView) {
      animation.start("visible");
    }
  }, [isInView]);
  return (
    <section ref={ref}>
      <motion.div
        className="mt-28 px-12 max-w-screen-2xl mx-auto"
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={animation}
        transition={{ duration: 0.5 }}
      >
        <motion.div>
          <h1 className="heading">How It Works</h1>
          <p className="text-center text-lightGray">
            Magna sit amet purus gravida quis blandit turpis cursus. Venenatis
            tellus in metus vulputate eu scelerisque felis.
          </p>

          <article className="md:flex md:items-center md:justify-between md:gap-10 mt-10">
            {features.map((feature, index) => {
              const { title, content, featureNumber, image } = feature;
              return (
                <Feature
                  key={index}
                  title={title}
                  content={content}
                  featureNumber={featureNumber}
                  image={image}
                />
              );
            })}
          </article>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Works;
