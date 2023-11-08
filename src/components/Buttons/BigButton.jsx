const BigButton = ({ children, type }) => {
  return (
    <button
      className={` rounded-full text-xl ${
        type === "header" &&
        "bg-black  px-[1.187rem] py-[0.687rem] font-FoundryMonoline font-bold  text-white transition-all duration-300 hover:text-secondary max-sm:bg-white max-sm:px-[1rem] max-sm:py-[0.4rem] max-sm:text-base max-sm:text-black"
      } 
      ${
        type === "footer" &&
        "font bg-secondary px-[3.25rem] py-[0.5rem] font-inter leading-10 text-black transition-all duration-300 hover:bg-[#2ea93d]"
      }`}
    >
      {children}
    </button>
  );
};

export default BigButton;
