import Events from "./Home/Events";
import Favorite from "./Home/Favorite";
import Footer from "./Footer";
import Restaurants from "./Home/Restaurants";
import Service from "./Home/Service";
import Subscribe from "./Home/Subscribe";
import Hero from "./Home/Hero";
import NavBar from "./NavBar";
import Works from "./Home/Works";

function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Works />
      <Restaurants />
      <Favorite />
      <Service />
      <Events />
      <Subscribe />
      <Footer />
    </>
  );
}

export default Home;
