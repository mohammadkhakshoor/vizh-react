import { vector } from "../../public/assets";

const NftCart = () => {
  return (
    <div class="flex flex-col gap-[0.2rem] ">
      <p class="px-[1.5rem] py-[0.875rem] text-xl font-normal leading-[1.875rem] shadow-md rounded-tr-xl rounded-tl-xl">
        NFT Name
      </p>
      <img
        class="shadow-md"
        src="https://via.placeholder.com/281x268"
        alt="img"
      />
      <div class=" flex flex-col gap-[0.3rem] px-[1.375rem] py-[0.812rem] shadow-md rounded-bl-xl rounded-br-xl">
        <div class="flex items-center gap-4 ">
          <img src={vector} alt="user" />
          <p className="text-base font-normal text-[#0C0C0C]">Artist Name</p>
        </div>
        <div class="flex items-center gap-4 ">
          <p className="text-base font-normal text-[#0C0C0C]">current Bid</p>
          <p class="text-xl font-bold text-[#0C0C0C]">0.4 ETH</p>
        </div>
      </div>
    </div>
  );
};

export default NftCart;
