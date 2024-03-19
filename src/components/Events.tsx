import { BiGroup, BiCalendar, BiHide } from "react-icons/bi";
import team from "../asserts/team.jpg";
import { serviceData } from "../data/data";
import SingleEvent from "./SingleEvent";

function Events() {
  return (
    <section className="max-w-screen-2xl mx-auto mt-20 px-14">
      <h1 className="heading capitalize">Our Latest news and events</h1>
      <main className="xl:flex xl:items-start xl:gap-6 mt-10 ">
        <article className="p-8 rounded-xl shadow-xl max-w-3xl mx-auto">
          <div className="border-b-2 border-slate-300 py-2">
            <img
              src={team}
              alt="team image"
              className=" h-96 md:max-w-2xl w-full rounded-xl"
            />
            <h2 className="text-gray-800 font-bold text-4xl mt-5">
              We Have Received An Award For The Quality Of Our Work
            </h2>
            <p className="text-lightGray text-xl mt-5 ">
              Donec adipiscing tristique risus nec feugiat in fermentum. Sapien
              eget mi proin sed libero. Et magnis dis parturient montes
              nascetur. Praesent semper feugiat nibh sed pulvinar proin gravida.
            </p>
            <button className="text-primary block mt-5">
              Read More &rarr;
            </button>
          </div>
          <div className="flex items-center gap-4 mt-5">
            <div className="flex items-center gap-2">
              <BiGroup className="text-2xl text-slate-300" />
              <span className=" text-slate-300">by Quickeat</span>
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
        </article>
        <article className="md:space-y-16 max-w-3xl mx-auto mt-8">
          {serviceData.map((data) => {
            return <SingleEvent image={data.image} title={data.title} />;
          })}
        </article>
      </main>
    </section>
  );
}

export default Events;
