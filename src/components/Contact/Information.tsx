import { MdAddLocationAlt, MdMarkunread, MdAddCall } from "react-icons/md";
import contact from "../../asserts/contacts-1.png";
import { type Variants, motion } from "framer-motion";

function Information() {
  const parentVariant: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 1 } },
  };

  const childrenVariant: Variants = {
    initial: { opacity: 0, y: -100 },
    animate: { opacity: 1, y: 0 },
  };
  return (
    <section className="max-w-screen-2xl mx-auto mt-20 px-14">
      <div className="lg:flex lg:items-center lg:justify-center lg:gap-7">
        <div className="max-w-xl xl:max-w-2xl">
          <header className="mb-3">
            <h1 className="heading lg:text-left">Contact us</h1>
            <p className="text-lightGray">
              Egestas sed tempus urna et pharetra pharetra massa. Fermentum
              posuere urna nec tincidunt praesent semper.
            </p>
          </header>
          <motion.div
            className="md:flex md:items-stretch md:gap-2 lg:justify-between lg:gap-4"
            initial="initial"
            animate="animate"
            variants={parentVariant}
          >
            <motion.div
              className="mt-5 bg-slate-100 p-3 rounded-lg shadow-xl w-52 sm:w-72 mx-auto"
              variants={childrenVariant}
              transition={{ type: "spring" }}
            >
              <MdAddLocationAlt className="text-primary text-4xl mb-3" />
              <div className="font-semibold  text-lg space-y-3">
                <p>1717 Harrison St, San</p>
                <p>Francisco, CA 94103,</p>
                <p>United States</p>
              </div>
            </motion.div>
            <motion.div
              className="mt-5 bg-slate-100 p-3 rounded-lg shadow-xl w-52 sm:w-72 mx-auto"
              variants={childrenVariant}
              transition={{ type: "spring" }}
            >
              <MdMarkunread className="text-primary text-4xl mb-3" />
              <div className="font-semibold  text-lg">
                <p>quick.info@mail.net</p>
                <span className="text-sm text-slate-800">
                  Lorem ipsum dolor sit.
                </span>
                <p className="mt-3">quick.info@mail.net</p>
                <span className="text-sm text-slate-800">
                  consectetur adipisicing elit.
                </span>
              </div>
            </motion.div>
            <motion.div
              className="mt-5 bg-slate-100 p-3 rounded-lg shadow-xl w-52 sm:w-72 mx-auto"
              variants={childrenVariant}
              transition={{ type: "spring" }}
            >
              <MdAddCall className="text-primary text-4xl mb-3" />
              <div className="font-semibold  text-lg">
                <p>+7 53534 543543</p>
                <span className="text-sm text-slate-800">
                  Lorem ipsum dolor sit.
                </span>
                <p className="mt-3">+24 4342 53252</p>
                <span className="text-sm text-slate-800">
                  consectetur adipisicing
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
        <div>
          <motion.img
            src={contact}
            alt="contact image"
            className="hidden lg:block"
            initial={{ scale: 0.6, rotate: 45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.7 }}
          />
        </div>
      </div>
    </section>
  );
}

export default Information;
