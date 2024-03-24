import { Outlet, useNavigation } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Loading from "./Loading";
import Model from "./Model";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr_auto]">
      {/* <Model /> */}
      {isLoading && <Loading />}
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
