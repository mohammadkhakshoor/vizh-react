const BigButton = ({ children, type }) => {
  return (
    <button
      className={` rounded-full text-xl ${
        type === "header" &&
        "font-bold  bg-black text-white py-[0.687rem] px-[1.187rem]  font-FoundryMonoline"
      } 
      ${
        type === "footer" &&
        "bg-secondary font-inter py-[0.5rem] px-[3.25rem] font-medium leading-10 "
      }`}
    >
      {children}
    </button>
  );
};

export default BigButton;
