function Button({ name }: { name: string }) {
  return (
    <button
      className="text-sm sm:text-xl lg:text-2xl btn  text-white tracking-wide uppercase border border-primary py-4 px-5 lg:px-6 hover:text-primary shadow-xl 
 focus:bg-yellow-500  focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-offset-2 disabled:cursor-progress "
    >
      {name}
    </button>
  );
}

export default Button;
