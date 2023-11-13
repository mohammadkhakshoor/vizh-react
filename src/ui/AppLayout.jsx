import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import ScrollToTop from "../Hooks/useScrollToTop";
// import ThemeSwitcher from "../componenSts/ThemeSwitcher";

const Applayout = () => {
  return (
    <div className="flex min-h-[100dvh] flex-col font-FoundryMonoline">
      <ScrollToTop />
      <div>
        <Header />
      </div>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Applayout;
