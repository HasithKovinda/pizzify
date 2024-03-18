import { BiCookie } from "react-icons/bi";
import favorite from "../asserts/fourite.png";

function Favorite() {
  return (
    <section
      className="md:flex md:items-center md:justify-between mt-20 
     mx-auto w-full text-center px-14 md:max-w-screen-2xl "
    >
      <div className="xl:relative">
        <img
          src={favorite}
          alt="favorite"
          className="h-96 w-96 block mx-auto xl:h-full xl:w-full object-cover"
        />
        <div className="hidden xl:block xl:absolute xl:right-5 xl:top-5">
          <BiCookie className="text-5xl text-primary" />
          <span className="text-primary">Pizza</span>
        </div>
      </div>
      <div className="max-w-sm xl:max-w-xl mx-auto">
        <h1 className="heading  text-4xl md:text-left lg:text-6xl">
          Food from your favorite restaurants to your table
        </h1>
        <p className="text-lightGray text-center md:text-left text-2xl">
          Pretium lectus quam id leo in vitae turpis massa sed. Lorem donec
          massa sapien faucibus et molestie. Vitae elementum curabitur vitae
          nunc.
        </p>
        <button className=" text-2xl btn text-white mx-auto md:m-0 md:mt-5 tracking-wide uppercase border border-primary py-4 px-6 mt-5 block rounded-lg hover:text-primary shadow-xl">
          order now
        </button>
      </div>
    </section>
  );
}

export default Favorite;
