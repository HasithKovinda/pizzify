import Hero from "./UI/Hero";
import NavBar from "./UI/NavBar";
import Works from "./UI/Works";
import Favorite from "./components/Favorite";
import Restaurants from "./components/Restaurants";
import Service from "./components/Service";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Works />
      <Restaurants />
      <Favorite />
      <Service />
    </>
  );
}

export default App;
