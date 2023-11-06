const BigButton = ({ children, type }) => {
  return (
    <button
      className={` rounded-full text-xl ${
        type === "header" &&
        "font-bold  bg-black text-white py-[0.687rem] px-[1.187rem]  font-FoundryMonoline hover:text-secondary transition-all duration-300 max-sm:bg-white max-sm:text-black max-sm:text-base max-sm:py-[0.4rem] max-sm:px-[1rem]"
      } 
      ${
        type === "footer" &&
        "bg-secondary text-black font-inter py-[0.5rem] px-[3.25rem] font leading-10 hover:bg-[#2ea93d] transition-all duration-300"
      }`}
    >
      {children}
    </button>
  );
};

export default BigButton;
