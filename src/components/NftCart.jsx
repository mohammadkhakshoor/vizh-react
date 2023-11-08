import { Link } from "react-router-dom";

const NftCart = ({ item }) => {
  const { id, lastName, avatar, nftName, price, image } = item;
  return (
    <Link to={`/collections/${id}`}>
      <div className="flex flex-col gap-[0.2rem] transition-all hover:translate-y-[-0.6rem]">
        <p className="rounded-tl-xl rounded-tr-xl px-[1.5rem] py-[0.875rem] text-xl font-normal leading-[1.875rem] shadow-md">
          {nftName}
        </p>
        <img className="object-cover shadow-md" src={image} alt="img" />
        <div className=" flex flex-col gap-[0.3rem] rounded-bl-xl rounded-br-xl px-[1.375rem] py-[0.812rem] shadow-md">
          <div className="flex items-center gap-4 ">
            <img src={avatar} className="h-7 w-7 rounded-full" alt="user" />
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
