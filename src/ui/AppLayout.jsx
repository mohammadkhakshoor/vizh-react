import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import ScrollToTop from "../Hooks/useScrollToTop";
import ThemeSwitcher from "../components/ThemeSwitcher";

const Applayout = () => {
  return (
    <div className=" font-FoundryMonoline ">
      <ScrollToTop />
      <ThemeSwitcher />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Applayout;
