import LoaderSpinner from "./LoaderSpinner";

const LoadingPurchase = () => {
  return (
    <div className="bg-white h-[70%] w-[60%] flex flex-col gap-6 items-center justify-center rounded-xl ">
      <LoaderSpinner />
      <p className="text-[2.1rem] font-bold text-black">
        Submitting your bid...
      </p>
    </div>
  );
};

export default LoadingPurchase;
