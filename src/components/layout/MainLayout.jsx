import Header from "./Header";
import Navbar from "./NavBar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="site-layout">
      <aside className="left-sidebar"></aside>

      <div className="main-column">
        <Header />
        <Navbar />

        <main>
          <Outlet />
        </main>

        <Footer />
      </div>

      <aside className="right-sidebar"></aside>
    </div>
  );
}

export default MainLayout;
