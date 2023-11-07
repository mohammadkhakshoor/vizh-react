import { useEffect, useState } from "react";
import LoaderSpinner from "./LoaderSpinner";

const ModalLoader = ({ children }) => {
  return (
    <div className="fixed top-0 left-0 bg-[#0000008c] h-screen w-screen flex items-center justify-center ">
      {children}
    </div>
  );
};

export default ModalLoader;
