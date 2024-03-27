import { BiGroup, BiCalendar, BiHide } from "react-icons/bi";
import { type serviceType } from "../../data/data";

function SingleEvent({ title, image }: serviceType) {
  return (
    <div className="mt-8 md:mt-0 rounded-xl md:flex md:items-stretch md:gap-4  mb-5">
      <img
        src={image}
        alt="pizza image"
        className="h-52 w-52 rounded-3xl object-cover"
      />
      <div>
        <div className="flex items-center mt-3 mb-mt-0 mb-4 gap-3">
          <div className="bg-primary text-white py-1 px-2 rounded-md">
            <span>restaurants</span>
          </div>
          <div className="bg-primary text-white py-1 px-2 rounded-md">
            <span>cooking</span>
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-lightGray mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </p>
        <div className="flex items-center gap-4 mt-5 flex-wrap">
          <div className="flex items-center gap-2">
            <BiGroup className="text-2xl text-slate-300" />
            <span className=" text-slate-300">by Pizzify</span>
          </div>
          <div className="flex items-center gap-2">
            <BiCalendar className="text-2xl text-slate-300" />
            <span className=" text-slate-300">01.Jan. 2023</span>
          </div>
          <div className="flex items-center gap-2">
            <BiHide className="text-2xl text-slate-300" />
            <span className=" text-slate-300">132</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleEvent;
