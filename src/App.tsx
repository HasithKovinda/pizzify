import Hero from "./UI/Hero";
import NavBar from "./UI/NavBar";
import Works from "./UI/Works";
import Events from "./components/Events";
import Favorite from "./components/Favorite";
import Footer from "./components/Footer";
import Restaurants from "./components/Restaurants";
import Service from "./components/Service";
import Subscribe from "./components/Subscribe";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Works />
      <Restaurants />
      <Favorite />
      <Service />
      <Events />
      {/* <Subscribe /> */}
      <Footer />
    </>
  );
}

export default App;
