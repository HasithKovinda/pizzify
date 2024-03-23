import { Outlet, useNavigation } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Loading from "./Loading";
import Model from "./Model";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <>
      <Model />
      {isLoading && <Loading />}
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default AppLayout;
