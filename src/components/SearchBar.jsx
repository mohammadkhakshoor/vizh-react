import { searchIcon } from "../assets/index";

const SearchBar = () => {
  return (
    <form className="w-full">
      <div className="relative">
        <i className="absolute inset-y-0 left-1 flex items-center pl-6">
          <img src={searchIcon} alt="seach icon" />
        </i>
        <input
          type="text"
          placeholder="Search NFT, Artist, Exhibition..."
          className="bold-plc-header block w-full rounded-full bg-[#F5F5F5] py-2 pl-[4rem] font-bold placeholder-[#d1d1d1] " //bold-blc is a custom style for placeholder
        />
      </div>
    </form>
  );
};

export default SearchBar;
