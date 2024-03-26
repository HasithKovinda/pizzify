import { useNavigate } from "react-router-dom";
import notFound from "../asserts/404.png";
import { motion } from "framer-motion";

function NotFound() {
  const navigate = useNavigate();

  return (
    <section className="grid place-items-center p-2">
      <div className="max-w-2xl flex flex-col items-center">
        <motion.img
          animate={{ scale: [0.5, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          src={notFound}
          alt="Page Your Looking For Not Found"
        />
        <h3 className="text-4xl font-semibold tracking-wide mt-3 mb-3 text-center">
          Sorry, we were unuble to find that page
        </h3>
        <p className="text-lightGray mb-4 text-center">
          Varius sit amet mattis vulputate enim nulla aliquet porttitor.
          Elementum nibh tellus molestie nunc.
        </p>
        <button
          onClick={() => navigate(-1)}
          className="hover:text-primary transition-colors duration-300"
        >
          &larr; Go back
        </button>
      </div>
    </section>
  );
}

export default NotFound;
