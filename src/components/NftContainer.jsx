import { useFakeData } from "../contexts/FakeDataContext";
import { useSearchQuery } from "../contexts/SearchNftContext";
import NftCart from "./NftCart";

const NftContainer = () => {
  const data = useFakeData();
  const { query } = useSearchQuery();
  const result = data.filter((NFT) =>
    NFT.nftName.toLowerCase().includes(query),
  );
  console.log(result);
  return (
    <div className="max-container ">
      <div className="nft-container">
        {result.map((item) => {
          return <NftCart item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default NftContainer;
