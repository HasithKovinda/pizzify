import RotateAnimation from "../Animations/RotateAnimation";

function Service() {
  return (
    <RotateAnimation classNames="max-w-screen-2xl mx-auto mt-20 px-14 ">
      <h1 className="text-gray-800 text-4xl font-bold text-center mb-5 capitalize">
        Service shows good taste
      </h1>
      <article className="md:flex md:items-center md:justify-between md:gap-5 flex-wrap">
        <div className="p-12 shadow-xl max-w-72 mx-auto flex items-center justify-center gap-5 mb-5 rounded-lg">
          <h1 className="text-primary font-extrabold text-6xl">976</h1>
          <span className="text-2xl text-lightGray">Satisfied Customer</span>
        </div>
        <div className="p-12 shadow-xl max-w-72 mx-auto flex items-center justify-center gap-5 mb-5 rounded-lg">
          <h1 className="text-primary font-extrabold text-6xl">12</h1>
          <span className="text-2xl text-lightGray">Best Restaurants</span>
        </div>
        <div className="p-12 shadow-xl max-w-72 mx-auto flex items-center justify-center gap-5 mb-5 rounded-lg">
          <h1 className="text-primary font-extrabold text-6xl">1K+</h1>
          <span className="text-2xl text-lightGray">Food Delivered</span>
        </div>
      </article>
    </RotateAnimation>
  );
}

export default Service;
