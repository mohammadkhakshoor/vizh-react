import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Applayout = () => {
  return (
    <div className="max-w-xl mx-auto">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Applayout;
