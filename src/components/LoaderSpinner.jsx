import { spinner } from "../assets";

const LoaderSpinner = () => {
  return (
    <i>
      <img className="animate-spin" src={spinner} alt="spinner" />
    </i>
  );
};

export default LoaderSpinner;
