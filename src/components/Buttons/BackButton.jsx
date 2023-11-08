import { useNavigate } from "react-router-dom";
import { backIcon } from "../../assets";

const BackButton = () => {
  const navigate = useNavigate();
  function handleNavigate() {
    navigate(-1);
  }
  return (
    <button
      className=" bottom-24 right-10 flex min-w-[28rem] items-center  justify-center justify-self-center rounded-full bg-[#F5F5F5] px-6 text-[2rem] font-bold leading-10 text-black   shadow-md transition-all duration-300 hover:text-secondary max-lg:fixed max-lg:min-w-[auto] max-lg:gap-3 max-lg:text-[1.1rem] sm:bottom-10 lg:gap-5 lg:px-[6rem] lg:py-[1rem] "
      onClick={handleNavigate}
    >
      back
      <span>
        <img
          src={backIcon}
          alt="back icon"
          className="bg-slate-1 h-8 w-8 max-lg:h-5 max-lg:w-5"
        />
      </span>
    </button>
  );
};

export default BackButton;
