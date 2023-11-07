import { useEffect, useState } from "react";
import LoaderSpinner from "./LoaderSpinner";
import { successIcon } from "../assets";

const ModalLoader = ({
  submitPurchase,
  setSubmitPurchase,
  handleSubmitPurchase,
}) => {
  const [succsessMessage, setSuccessMessage] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setSuccessMessage(true);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [submitPurchase, setSubmitPurchase]);
  return (
    <div className="fixed top-0 left-0 bg-[#0000008c] h-screen w-screen flex items-center justify-center ">
      {!succsessMessage ? (
        <div className="bg-white h-[70%] w-[60%] flex flex-col gap-6 items-center justify-center rounded-xl">
          <LoaderSpinner />
          <p className="text-[2.1rem] font-bold text-black">
            Submitting your bid...
          </p>
        </div>
      ) : (
        <div
          className="bg-white h-[70%] w-[60%] flex flex-col gap-6 items-center justify-center rounded-xl"
          onClick={() => {
            setSubmitPurchase(false);
          }}
        >
          <i>
            <img src={successIcon} alt="success icon" />
          </i>
          <p className="text-[2.1rem] font-bold text-black">
            Bid submitted successfully...
          </p>
        </div>
      )}
    </div>
  );
};

export default ModalLoader;
