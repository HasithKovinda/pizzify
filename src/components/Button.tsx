function Button({ name }: { name: string }) {
  return (
    <button
      className=" text-2xl btn  text-white tracking-wide uppercase border border-primary py-4 px-6 hover:text-primary shadow-xl 
 focus:bg-yellow-500  focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-offset-2 "
    >
      {name}
    </button>
  );
}

export default Button;
