import { useFakeData } from "../contexts/FakeDataContext";
import NftCart from "./NftCart";

const NftContainer = () => {
  const data = useFakeData();
  return (
    <div className="max-container ">
      <div className="nft-container">
        {data.map((item) => {
          return <NftCart item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default NftContainer;
