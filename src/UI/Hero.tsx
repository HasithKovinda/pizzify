import hero from "../asserts/hero.png";

function Hero() {
  return (
    <main className="max-w-screen-2xl px-12 md:flex md:items-center md:justify-between mx-auto">
      <div className="max-w-lg">
        <h1 className="text-gray-800 text-6xl uppercase font-extrabold leading-snug">
          The Best Restaurants In Your Home
        </h1>
        <p className="text-slate-500 mt-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla,
          aliquam cumque? Accusamus dicta commodi eveniet quo expedita cumque
          sed eum.
        </p>
        <button className=" text-2xl btn text-white tracking-wide uppercase border border-primary py-4 px-6 mt-5 block rounded-lg hover:text-primary shadow-xl">
          order now
        </button>
      </div>
      <img
        src={hero}
        alt="hero-image"
        className="mt-16 block mx-auto h-96 w-96 lg:h-[720px] lg:w-[500px] xl:w-[680px]"
      />
    </main>
  );
}

export default Hero;
