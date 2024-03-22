import { BiCookie } from "react-icons/bi";
import favorite from "../../asserts/fourite.png";
import Button from "../Button";
import FloatAnimation from "../Animations/FloatAnimation";

function Favorite() {
  return (
    <section>
      <FloatAnimation
        classNames="md:flex md:items-center md:justify-between mt-20 
     mx-auto w-full text-center px-12 max-w-screen-2xl"
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
        <div className="max-w-sm xl:max-w-xl mx-auto md:flex md:flex-col md:items-start">
          <h1 className="heading  text-4xl md:text-left lg:text-6xl">
            Food from your favorite restaurants to your table
          </h1>
          <p className="text-lightGray text-center md:text-left text-2xl mb-5">
            Pretium lectus quam id leo in vitae turpis massa sed. Lorem donec
            massa sapien faucibus et molestie. Vitae elementum curabitur vitae
            nunc.
          </p>
          <Button name="order now" />
        </div>
      </FloatAnimation>
    </section>
  );
}

export default Favorite;
