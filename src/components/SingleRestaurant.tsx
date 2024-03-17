import { BiSolidStar } from "react-icons/bi";
import { restaurantType } from "../data/data";

function SingleRestaurant({
  title,
  image,
  subHeadings,
  content,
}: restaurantType) {
  return (
    <article className="flex items-start gap-5 mt-4 md:max-w-md lg:max-w-md 2xl:max-w-2xl">
      <img
        src={image}
        alt="logo one"
        className="md:h-30 md:w-30 lg:h-30 lg:w-30 xl:h-40 xl:w-40"
      />
      <div className="space-y-3">
        <div>
          <h2 className="text-2xl font-semibold">{title}</h2>
        </div>
        <div className="flex items-center gap-3">
          {subHeadings.map((heading, index) => {
            return (
              <div
                key={index}
                className="border border-primary rounded-lg text-primary px-2 py-1 hover:bg-primary hover:text-white transition-colors"
              >
                <span>{heading}</span>
              </div>
            );
          })}
        </div>
        <div className="space-x-2 text-2xl">
          {Array.from({ length: 5 }, (_, i) => (
            <BiSolidStar key={i} className="text-primary inline" />
          ))}
        </div>
        <p className="text-lightGray">{content}</p>
      </div>
    </article>
  );
}

export default SingleRestaurant;
