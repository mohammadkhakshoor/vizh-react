const ModalLoader = ({ children }) => {
  return (
    <div className="fixed left-0 top-0 z-10 flex h-screen w-screen items-center justify-center bg-[#0000008c] ">
      {children}
    </div>
  );
};

export default ModalLoader;
