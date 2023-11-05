import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Applayout = () => {
  return (
    <div className="max-container font-FoundryMonoline ">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Applayout;
