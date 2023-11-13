import { useFakeData } from "../contexts/FakeDataContext";
import { useSearchQuery } from "../contexts/SearchNftContext";
import NftCart from "./NftCart";

const NftContainer = () => {
  const data = useFakeData();
  const { query } = useSearchQuery();
  const result = data.filter((NFT) =>
    NFT.nftName.toLowerCase().includes(query),
  );
  return (
    <div className="max-container ">
      <div className="nft-container">
        {result.map((item) => {
          return <NftCart item={item} key={item.id} />;
        })}
      </div>
      {/***  is there is no item to show , the following element will be rendered ***/}
      {result.length < 1 && (
        <div className="px-10 pb-[6rem]  text-center text-5xl max-sm:text-4xl sm:px-[3.5rem]">
          Oops, there is no item to show
        </div>
      )}
    </div>
  );
};

export default NftContainer;
