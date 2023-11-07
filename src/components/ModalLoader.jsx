const ModalLoader = ({ children }) => {
  return (
    <div className="fixed z-10 top-0 left-0 bg-[#0000008c] h-screen w-screen flex items-center justify-center ">
      {children}
    </div>
  );
};

export default ModalLoader;
