import BigButton from "../components/Buttons/BigButton";
import Logo from "../components/Logo";
import SearchBar from "../components/SearchBar";
const Header = () => {
  return (
    <header className="pt-[1rem] pl-[3.06rem] pr-[4.875rem] flex items-center justify-between   ">
      <div className="flex items-center gap-6 w-[50%]">
        <Logo type="header" />
        <SearchBar />
      </div>
      <BigButton type="header">Connect Wallet</BigButton>
    </header>
  );
};

export default Header;
