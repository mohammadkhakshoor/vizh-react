import { searchIcon } from "../../public/assets";

const SearchBar = () => {
  return (
    <form className="w-full">
      <div className="relative">
        <i className="absolute flex items-center inset-y-0 left-1 pl-6">
          <img src={searchIcon} alt="seach icon" />
        </i>
        <input
          type="text"
          placeholder="Search NFT, Artist, Exhibition..."
          className="block w-full pl-[4rem] py-2 rounded-full font-bold bg-[#F5F5F5] bold-plc  " //bold-blc is a custom style for placeholder
        />
      </div>
    </form>
  );
};

export default SearchBar;
