import { FiX } from "react-icons/fi";

function Model() {
  return (
    <div className="fixed top-0 left-0 h-full w-full bg-stone-900/60 z-50 flex items-center justify-center">
      <div className=" bg-slate-100 p-6 rounded-xl shadow-2xl max-w-xl">
        <div className="flex justify-end mb-3">
          <FiX className="text-2xl text-red-600 cursor-pointer hover:text-red-700 transition-colors duration-200" />
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
        />
        <div className="mt-5 flex justify-center">
          <button className="btn py-2 px-3 text-white rounded-lg border hover:text-primary hover:border hover:border-primary">
            Submit Information
          </button>
        </div>
      </div>
    </div>
  );
}

export default Model;
