import { successIcon } from "../assets";

const SuccessMessage = ({ setIsLoading }) => {
  function handleRemoveModal() {
    setIsLoading(false);
  }
  return (
    <div
      className="bg-white h-[70%] w-[60%] flex flex-col gap-6 items-center justify-center rounded-xl max-sm:w-[80%] max-sm:h-[60%]"
      onClick={handleRemoveModal}
    >
      <i>
        <img
          src={successIcon}
          alt="success icon "
          className="max-sm:w-[4rem] max-sm:h-[4rem]"
        />
      </i>
      <p className="text-[2.1rem] font-bold text-black max-sm:text-[1.4rem] text-center">
        Bid submitted successfully...
      </p>
    </div>
  );
};

export default SuccessMessage;
