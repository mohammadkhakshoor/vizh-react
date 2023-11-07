import { successIcon } from "../assets";

const SuccessMessage = ({ setIsLoading }) => {
  function handleRemoveModal() {
    setIsLoading(false);
  }
  return (
    <div
      className="bg-white h-[70%] w-[60%] flex flex-col gap-6 items-center justify-center rounded-xl"
      onClick={handleRemoveModal}
    >
      <i>
        <img src={successIcon} alt="success icon" />
      </i>
      <p className="text-[2.1rem] font-bold text-black">
        Bid submitted successfully...
      </p>
    </div>
  );
};

export default SuccessMessage;
