import Events from "./Home/Events";
import Favorite from "./Home/Favorite";
import Restaurants from "./Home/Restaurants";
import Service from "./Home/Service";
import Subscribe from "./Home/Subscribe";
import Hero from "./Home/Hero";
import Works from "./Home/Works";

function Home() {
  return (
    <>
      <Hero />
      <Works />
      <Restaurants />
      <Favorite />
      <Service />
      <Events />
      <Subscribe />
    </>
  );
}

export default Home;
