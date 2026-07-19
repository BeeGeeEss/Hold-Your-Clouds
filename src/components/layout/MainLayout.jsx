import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navbar from "./NavBar";
import Footer from "./Footer";

function MainLayout() {
  return (
    <>
      <Header />
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default MainLayout;
