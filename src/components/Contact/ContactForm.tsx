import { BiGroup, BiEnvelope } from "react-icons/bi";
import { motion, useAnimation, useInView } from "framer-motion";
import Button from "../Button";
import { useRef, useEffect, FormEvent } from "react";

function ContactForm() {
  const ref = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref);
  const animation = useAnimation();
  useEffect(() => {
    if (isInView) {
      animation.start("show");
    }
  }, [isInView]);

  const item = {
    hidden: { opacity: 0, x: "-100%" },
    show: { opacity: 1, x: 0 },
  };

  const container = {
    hidden: { opacity: 0, x: "-100%" },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 1,
      },
    },
  };

  function handleForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (ref.current) ref.current.reset();
  }

  return (
    <div>
      <section className="max-w-screen-2xl mx-auto mt-20 px-14 bg-gray-50 rounded-xl p-6 shadow-xl">
        <header className="max-w-xl lg:max-w-2xl mx-auto">
          <h1 className="heading lg:text-left">Get in touch with us</h1>
          <p className="text-lightGray text-center lg:text-left">
            Magna sit amet purus gravida quis blandit turpis cursus. Venenatis
            tellus in metus vulputate eu scelerisque felis.
          </p>
        </header>
        <motion.form
          onSubmit={handleForm}
          ref={ref}
          action=""
          className="mt-5 space-y-3 max-w-xl lg:max-w-2xl mx-auto"
          initial="hidden"
          variants={container}
          animate={animation}
        >
          <motion.div variants={item} className="lg:relative">
            <BiGroup className="hidden lg:block lg:absolute lg:top-1/2 lg:translate-y-[-50%] lg:left-3 lg:text-gray-400 lg:text-2xl" />
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full px-4 lg:px-10 py-2 border border-slate-300 rounded-lg focus:outline-primary md:text-lg"
            />
          </motion.div>
          <motion.div variants={item} className="lg:relative">
            <BiEnvelope className="hidden lg:block lg:absolute lg:top-1/2 lg:translate-y-[-50%] lg:left-3 lg:text-gray-400 lg:text-2xl" />
            <input
              type="text"
              placeholder="Enter Your Email"
              className="w-full px-4 lg:px-10 py-2 border border-slate-300 rounded-lg focus:outline-primary md:text-lg"
            />
          </motion.div>
          <motion.div variants={item}>
            <textarea
              rows={5}
              cols={10}
              placeholder="Your Message"
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-primary md:text-lg"
            />
          </motion.div>
          <motion.div variants={item}>
            <Button name="Submit Application" />
          </motion.div>
        </motion.form>
      </section>
    </div>
  );
}

export default ContactForm;
