import { useParams } from "react-router-dom";
import { useFakeData } from "../contexts/FakeDataContext";
import { checkSign } from "../assets";
import BackButton from "./Buttons/BackButton";
import { useEffect, useState } from "react";
import ModalLoader from "./ModalLoader";
import LoadingPurchase from "./loadingPurchase";
import SuccessMessage from "./SuccessMessage";

const NftInfo = () => {
  const data = useFakeData();
  const { id } = useParams();
  const { lastName, nftName, price, image } = data.find((nft) => nft.id === id);
  const calculatePercentage = (2.5 / 100) * Number(price);
  const finalPrice = (calculatePercentage + Number(price)).toFixed(3);
  const [isLoading, setIsLoading] = useState(false);
  const [confirmedBuy, setConfirmedBuy] = useState(true);

  function handleLoading() {
    setIsLoading(true);
    setConfirmedBuy(true);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setConfirmedBuy(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [confirmedBuy]);

  return (
    <>
      {isLoading && (
        <ModalLoader>
          {confirmedBuy ? (
            <LoadingPurchase />
          ) : (
            <SuccessMessage setIsLoading={setIsLoading} />
          )}
        </ModalLoader>
      )}

      <div className="max-container sm:max-lg:px-24 lg:px-[3.125rem] lg:pt-[6.625rem] lg:pb-[3.375rem] py-10 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5 ">
          <div className="grid grid-cols-1 gap-12 px-[2rem] lg:px-[3.06rem] py-[1.6rem] bg-[#F5F5F5]  rounded-xl ">
            <div className="flex flex-col gap-[1.5rem] ">
              <div className="flex gap-3 items-center">
                <p className="text-[1.75rem] leading-10 font-bold">
                  From {lastName}
                </p>
                <i>
                  <img src={checkSign} alt="check sign" />
                </i>
              </div>
              <h2 className="text-[2.5rem] font-bold">{nftName}</h2>
              <div className="flex gap-4 items-center">
                <span className="text-2xl font-bolds">Royalties</span>
                <span className="text-xl font-bold bg-secondary py-[3px] leading-tight px-3 rounded-md">
                  2.5%
                </span>
              </div>
              <p className="max-w-[92%] text-xl text-footerLinkColor leading-[1.97rem]">
                You are about to buy this artwork from {lastName} collection.
              </p>
            </div>
            <div className="flex flex-col gap-[2.2rem] lg:gap-[4.125rem] text-black">
              <div className="flex flex-col gap-[1rem] lg:gap-[2.625rem]">
                <div className="flex gap-3 lg:gap-10 items-center  ">
                  <p className="text-base font-bold min-w-[5rem]">
                    Floor Price
                  </p>
                  <div className="flex gap-5 items-center bg-white px-3 lg:px-5 py-2 rounded-2xl">
                    <span className="text-sm font-bold min-w-[2.8rem]">
                      {Number(price)}
                    </span>
                    <span className="bg-secondary text-sm font-bold px-4 py-1 rounded-full">
                      ETH
                    </span>
                  </div>
                </div>
                <div className="flex gap-3 lg:gap-10 items-center">
                  <p className="text-base font-bold min-w-[5rem]">Mintii fee</p>
                  <span className="text-sm font-bold min-w-[2.8rem] px-5">
                    2.5%
                  </span>
                </div>
              </div>
              <div className="flex gap-3 lg:gap-10 items-center">
                <p className="text-base font-bold min-w-[5rem]">You will pay</p>
                <div className="flex gap-5 items-center bg-white px-3 lg:px-5 py-2 rounded-2xl">
                  <span className="text-sm font-bold min-w-[2.8rem]">
                    {finalPrice}
                  </span>
                  <span className="bg-secondary text-sm font-bold px-4 py-1 rounded-full">
                    ETH
                  </span>
                </div>
              </div>
            </div>

            <button
              className="justify-self-center text-stone-50 lg:text-[2rem] font-bold bg-black leading-10 lg:px-[6rem] py-[1rem] rounded-full lg:min-w-[28rem] min-w-[15rem]  hover:text-secondary transition-all duration-300 shadow-md px-7 text-[1.2rem]"
              onClick={handleLoading}
              disabled={isLoading}
            >
              Submit Purchase
            </button>
          </div>
          <div className="flex flex-col gap-5 items-center pb-[1.6rem] max-lg:row-start-1">
            <img
              src={image}
              className="object-cover rounded-xl  w-full h-full"
              alt=""
            />
            <BackButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default NftInfo;
