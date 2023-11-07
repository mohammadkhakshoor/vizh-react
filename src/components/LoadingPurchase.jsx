import LoaderSpinner from "./LoaderSpinner";

const LoadingPurchase = () => {
  return (
    <div className="bg-white h-[70%] w-[60%] flex flex-col gap-6 items-center justify-center rounded-xl max-sm:w-[80%] max-sm:h-[60%]">
      <LoaderSpinner />
      <p className="text-[2.1rem] font-bold text-black max-sm:text-[1.4rem] text-center">
        Submitting your bid...
      </p>
    </div>
  );
};

export default LoadingPurchase;
