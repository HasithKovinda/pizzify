import Hero from "./UI/Hero";
import NavBar from "./UI/NavBar";
import Works from "./UI/Works";
import Favorite from "./components/Favorite";
import Restaurants from "./components/Restaurants";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Works />
      <Restaurants />
      <Favorite />
    </>
  );
}

export default App;
