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

      <div className="max-container px-6 py-10 sm:max-lg:px-24 lg:px-[3.125rem] lg:pb-[3.375rem] lg:pt-[6.625rem]">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5 ">
          <div className="grid grid-cols-1 gap-12 rounded-xl bg-[#F5F5F5] px-[2rem] py-[1.6rem]  lg:px-[3.06rem] ">
            <div className="flex flex-col gap-[1.5rem] ">
              <div className="flex items-center gap-3">
                <p className="text-[1.75rem] font-bold leading-10">
                  From {lastName}
                </p>
                <i>
                  <img src={checkSign} alt="check sign" />
                </i>
              </div>
              <h2 className="text-[2.5rem] font-bold">{nftName}</h2>
              <div className="flex items-center gap-4">
                <span className="font-bolds text-2xl">Royalties</span>
                <span className="rounded-md bg-secondary px-3 py-[3px] text-xl font-bold leading-tight">
                  2.5%
                </span>
              </div>
              <p className="max-w-[92%] text-xl leading-[1.97rem] text-footerLinkColor">
                You are about to buy this artwork from {lastName} collection.
              </p>
            </div>
            <div className="flex flex-col gap-[2.2rem] text-black lg:gap-[4.125rem]">
              <div className="flex flex-col gap-[1rem] lg:gap-[2.625rem]">
                <div className="flex items-center gap-3 lg:gap-10  ">
                  <p className="min-w-[5rem] text-base font-bold">
                    Floor Price
                  </p>
                  <div className="flex items-center gap-5 rounded-2xl bg-white px-3 py-2 lg:px-5">
                    <span className="min-w-[2.8rem] text-sm font-bold">
                      {Number(price)}
                    </span>
                    <span className="rounded-full bg-secondary px-4 py-1 text-sm font-bold">
                      ETH
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3 lg:gap-10">
                  <p className="min-w-[5rem] text-base font-bold">Mintii fee</p>
                  <span className="min-w-[2.8rem] px-5 text-sm font-bold">
                    2.5%
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3 lg:gap-10">
                <p className="min-w-[5rem] text-base font-bold">You will pay</p>
                <div className="flex items-center gap-5 rounded-2xl bg-white px-3 py-2 lg:px-5">
                  <span className="min-w-[2.8rem] text-sm font-bold">
                    {finalPrice}
                  </span>
                  <span className="rounded-full bg-secondary px-4 py-1 text-sm font-bold">
                    ETH
                  </span>
                </div>
              </div>
            </div>

            <button
              className="min-w-[15rem] justify-self-center rounded-full bg-black px-7 py-[1rem] text-[1.2rem] font-bold leading-10 text-stone-50 shadow-md  transition-all duration-300 hover:text-secondary lg:min-w-[28rem] lg:px-[6rem] lg:text-[2rem]"
              onClick={handleLoading}
              disabled={isLoading}
            >
              Submit Purchase
            </button>
          </div>
          <div className="flex flex-col items-center gap-5 pb-[1.6rem] max-lg:row-start-1">
            <img
              src={image}
              className="h-full w-full  rounded-xl object-cover"
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
