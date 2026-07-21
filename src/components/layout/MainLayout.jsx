import { Outlet } from "react-router-dom";

import Header from "../layout/Header";
import NavBar from "../layout/NavBar";
import Footer from "../layout/Footer";

export default function MainLayout() {
  return (
    <div className="app">
      <Header />

      <NavBar />

      <main className="app-content">
        <div className="site-layout">
          <aside className="left-sidebar" />

          <section className="main-column">
            <Outlet />
          </section>

          <aside className="right-sidebar" />
        </div>
      </main>

      <Footer />
    </div>
  );
}
