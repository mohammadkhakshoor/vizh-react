import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import ScrollToTop from "../Hooks/useScrollToTop";

const Applayout = () => {
  return (
    <div className=" font-FoundryMonoline ">
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Applayout;
