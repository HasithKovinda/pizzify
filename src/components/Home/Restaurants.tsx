import { restaurantData } from "../../data/data";
import RotateAnimation from "../Animations/RotateAnimation";
import SingleRestaurant from "./SingleRestaurant";

function Restaurants() {
  return (
    <div className="overscroll-x-none mt-28 px-12 space-y-12 max-w-screen-2xl mx-auto lg:flex lg:items-center lg:justify-between lg:gap-5 lg:flex-wrap">
      <div className="md:max-w-md lg:max-w-md 2xl:max-w-2xl">
        <h1 className="heading">4 Best Restaurants in Your City</h1>
        <p className="text-lightGray text-lg">
          Magna sit amet purus gravida quis blandit turpis cursus. Venenatis
          tellus in metus vulputate.
        </p>
      </div>
      {restaurantData.map((data, index) => {
        return (
          <SingleRestaurant
            title={data.title}
            content={data.content}
            image={data.image}
            subHeadings={data.subHeadings}
            key={index}
          />
        );
      })}
    </div>
  );
}

export default Restaurants;
