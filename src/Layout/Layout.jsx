import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/Footer/footer";

export default function Layout() {
  return (
    <div className="layout">
      <Header className="headerr" />
      <Outlet />
      <Footer />
    </div>
  );
}
