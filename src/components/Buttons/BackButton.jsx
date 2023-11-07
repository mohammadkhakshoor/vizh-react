import { useNavigate } from "react-router-dom";
import { backIcon } from "../../assets";

const BackButton = () => {
  const navigate = useNavigate();
  function handleNavigate() {
    navigate(-1);
  }
  return (
    <button
      className=" min-w-[28rem] flex items-center justify-center lg:gap-5  justify-self-center text-black text-[2rem] font-bold bg-[#F5F5F5] leading-10 lg:px-[6rem] lg:py-[1rem] rounded-full   hover:text-secondary transition-all duration-300 shadow-md max-lg:fixed bottom-24 sm:bottom-10 right-10 max-lg:min-w-[auto] max-lg:text-[1.1rem] max-lg:gap-3 px-6 "
      onClick={handleNavigate}
    >
      back
      <span>
        <img
          src={backIcon}
          alt="back icon"
          className="w-8 h-8 bg-slate-1 max-lg:w-5 max-lg:h-5"
        />
      </span>
    </button>
  );
};

export default BackButton;
