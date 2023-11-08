import LoaderSpinner from "./LoaderSpinner";

const LoadingPurchase = () => {
  return (
    <div className="flex h-[70%] w-[60%] flex-col items-center justify-center gap-6 rounded-xl bg-white max-sm:h-[60%] max-sm:w-[80%]">
      <LoaderSpinner />
      <p className="text-center text-[2.1rem] font-bold text-black max-sm:text-[1.4rem]">
        Submitting your bid...
      </p>
    </div>
  );
};

export default LoadingPurchase;
