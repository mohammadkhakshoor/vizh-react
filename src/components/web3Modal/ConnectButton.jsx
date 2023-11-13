import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount, useBalance } from "wagmi";

export default function ConnectButton() {
  const { open } = useWeb3Modal();
  const { isConnected, address, isConnecting } = useAccount();
  const { data } = useBalance({ address });
  const refinedAddress =
    address?.slice(0, 5) + "..." + address?.slice(-5, address.length);

  return (
    <>
      <button
        onClick={() => open()}
        disabled={isConnecting}
        className={`rounded-full bg-black px-[1.187rem]  py-[0.687rem] font-FoundryMonoline text-xl font-bold  text-white transition-all duration-300 hover:text-secondary max-sm:bg-white max-sm:px-[1rem] max-sm:py-[0.4rem] max-sm:text-base max-sm:text-black ${
          isConnecting ? "bg-gray-400 text-black" : ""
        }`}
      >
        {isConnected ? (
          <>
            <span className="pr-5">{`${data?.symbol}  ${data?.value}`}</span>
            <span>{refinedAddress}</span>
          </>
        ) : (
          "Connect Wallet"
        )}
      </button>
    </>
  );
}
