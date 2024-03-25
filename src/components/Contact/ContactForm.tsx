import { motion } from "framer-motion";
import Button from "../Button";

function ContactForm() {
  const animationProps = {
    initial: { opacity: 0, x: "-100%" },
    animate: { opacity: 1, x: 0 },
    transition: { type: "spring" },
  };
  return (
    <section className="max-w-screen-2xl mx-auto mt-20 px-14 bg-gray-50 rounded-xl p-6 shadow-xl">
      <header className="max-w-xl lg:max-w-2xl mx-auto">
        <h1 className="heading lg:text-left">Get in touch with us</h1>
        <p className="text-lightGray text-center lg:text-left">
          Magna sit amet purus gravida quis blandit turpis cursus. Venenatis
          tellus in metus vulputate eu scelerisque felis.
        </p>
      </header>
      <form action="" className="mt-5 space-y-3 max-w-xl lg:max-w-2xl mx-auto">
        <motion.div {...animationProps}>
          <input
            type="text"
            placeholder="Enter Your Name"
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-primary md:text-lg"
          />
        </motion.div>
        <motion.div {...animationProps}>
          <input
            type="text"
            placeholder="Enter Your Email"
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-primary md:text-lg"
          />
        </motion.div>
        <motion.div {...animationProps}>
          <textarea
            rows={5}
            cols={10}
            placeholder="Your Message"
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-primary md:text-lg"
          />
        </motion.div>
        <motion.div {...animationProps}>
          <Button name="Submit Application" />
        </motion.div>
      </form>
    </section>
  );
}

export default ContactForm;
