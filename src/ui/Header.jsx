import BigButton from "../components/Buttons/BigButton";
import Logo from "../components/Logo";
import SearchBar from "../components/SearchBar";
const Header = () => {
  return (
    <header className="max-container pt-[1rem] px-6 lg:pl-[3.06rem] lg:pr-[4.875rem] flex items-center justify-between   ">
      <div className="flex items-center gap-6 w-full sm:w-[60%] xl:w-[50%]">
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
