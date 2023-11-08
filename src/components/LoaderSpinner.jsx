import { spinner } from "../assets";

const LoaderSpinner = () => {
  return (
    <i>
      <img
        className="animate-spin max-sm:h-[4rem] max-sm:w-[4rem]"
        src={spinner}
        alt="spinner"
      />
    </i>
  );
};

export default LoaderSpinner;
