import { successIcon } from "../assets";

const SuccessMessage = ({ setIsLoading }) => {
  function handleRemoveModal() {
    setIsLoading(false);
  }
  return (
    <div
      className="flex h-[70%] w-[60%] flex-col items-center justify-center gap-6 rounded-xl bg-white max-sm:h-[60%] max-sm:w-[80%]"
      onClick={handleRemoveModal}
    >
      <i>
        <img
          src={successIcon}
          alt="success icon "
          className="max-sm:h-[4rem] max-sm:w-[4rem]"
        />
      </i>
      <p className="text-center text-[2.1rem] font-bold text-black max-sm:text-[1.4rem]">
        Bid submitted successfully...
      </p>
    </div>
  );
};

export default SuccessMessage;
