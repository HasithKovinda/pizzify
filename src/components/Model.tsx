import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { FiX } from "react-icons/fi";
import useUserDispatch from "../hooks/useUserDispatch";
import { updateName } from "../features/user/userSlice";
import { motion } from "framer-motion";

function Model({ handleClose }: { handleClose: () => void }) {
  const [name, setName] = useState("");
  const model = useRef<HTMLDivElement>(null);
  const dispatch = useUserDispatch();

  function handleSubmit() {
    if (!name) return;
    dispatch(updateName({ userName: name }));
    handleClose();
    setName("");
  }

  useEffect(() => {
    function handleModelClose(e: MouseEvent) {
      const targetNode = e.target as Node;
      if (model.current && !model.current.contains(targetNode)) {
        handleClose();
      }
    }

    document.addEventListener("click", handleModelClose, true);

    return () => document.removeEventListener("click", handleClose, true);
  });

  return createPortal(
    <div
      className="fixed top-0 left-0 h-full w-full bg-stone-900/60 z-50 flex items-center justify-center"
      ref={model}
    >
      <motion.div
        className=" bg-slate-100 p-6 rounded-xl shadow-2xl max-w-xl"
        initial={{ opacity: 0, y: "-100%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "-100%" }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex justify-end mb-3">
          <FiX
            className="text-2xl text-red-600 cursor-pointer hover:text-red-700 transition-colors duration-200"
            onClick={handleClose}
          />
        </div>
        <h1 className="text-3xl font-semibold mb-3">
          User Information Required
        </h1>
        <span className="text-lightGray inline-block mb-5">
          To add items to the cart we need your user name.Please add valid user
          name.This name will be used for your delivery.
        </span>
        <input
          type="text"
          placeholder="Enter Your User Name"
          className="w-full p-3 outline-none focus:outline-primary"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="mt-5 flex justify-center">
          <button
            className="btn py-2 px-3 text-white rounded-lg border hover:text-primary hover:border hover:border-primary"
            onClick={handleSubmit}
          >
            Submit Information
          </button>
        </div>
      </motion.div>
    </div>,
    document.body
  );
}

export default Model;
