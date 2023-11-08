import BigButton from "../components/Buttons/BigButton";
import Logo from "../components/Logo";
import SearchBar from "../components/SearchBar";
const Header = () => {
  return (
    <header className="max-container flex items-center justify-between px-6 pt-[1rem] lg:pl-[3.06rem] lg:pr-[4.875rem]   ">
      <div className="flex w-full items-center gap-6 sm:w-[60%] xl:w-[50%]">
        <Logo type="header" />
        <SearchBar />
      </div>
      <div className="max-sm:fixed max-sm:bottom-10 max-sm:right-10">
        <BigButton type="header">Connect Wallet</BigButton>
      </div>
    </header>
  );
};

export default Header;
