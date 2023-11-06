import NftCart from "./NftCart";

const NftContainer = () => {
  return (
    <div class="max-container ">
      <div className="nft-container">
        <NftCart />
        <NftCart />
        <NftCart />
      </div>
    </div>
  );
};

export default NftContainer;
