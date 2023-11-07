import { Link } from "react-router-dom";

const NftCart = ({ item }) => {
  const { id, lastName, avatar, nftName, price, image } = item;
  return (
    <Link to={`/collections/${id}`}>
      <div className="flex flex-col gap-[0.2rem] hover:translate-y-[-0.6rem] transition-all">
        <p className="px-[1.5rem] py-[0.875rem] text-xl font-normal leading-[1.875rem] shadow-md rounded-tr-xl rounded-tl-xl">
          {nftName}
        </p>
        <img className="shadow-md object-cover" src={image} alt="img" />
        <div className=" flex flex-col gap-[0.3rem] px-[1.375rem] py-[0.812rem] shadow-md rounded-bl-xl rounded-br-xl">
          <div className="flex items-center gap-4 ">
            <img src={avatar} className="w-7 h-7 rounded-full" alt="user" />
            <p className="text-base font-normal text-[#0C0C0C]">{lastName}</p>
          </div>
          <div className="flex items-center gap-4 ">
            <p className="text-base font-normal text-[#0C0C0C]">current Bid</p>
            <p className="text-xl font-bold text-[#0C0C0C]">{price} ETH</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NftCart;
