import { Link } from "react-router-dom";
import { logoBgLight } from "../assets/index";
import BigButton from "../components/Buttons/BigButton";

const Footer = () => {
  return (
    <footer className="bg-black ">
      <div className="max-container text-white py-10 px-8  sm:px-[4.187rem] sm:pt-[3.637rem] sm:pb-[5.75rem] lg:px-[8.187rem] lg:pt-[3.637rem] lg:pb-[5.75rem]">
        <div className="flex flex-col sm:flex-row items-center gap-6 justify-between font-inter mb-16 lg:mb-[5.44rem]">
          <img
            src={logoBgLight}
            alt="Logo"
            className="h-28 w-28  self-start sm:w-auto sm:h-auto"
          />
          <div className="flex flex-col lg:justify-between gap-12 lg:gap-[2rem] sm:w-[60.3%]">
            <h1 className=" font-inter text-5xl sm:text-4xl lg:text-3xl lg:pl-3   lg:leading-10 text-white">
              Become an{" "}
              <span className="max-sm:text-secondary max-sm:tracking-wider max-sm:font-FoundryMonoline max-sm:font-bold">
                Early{" "}
              </span>
              Adopter
            </h1>
            <form className="flex flex-col justify-between lg:flex-row  gap-[1.25rem] lg:items-end ">
              <input
                type="text"
                to={"/"}
                className="w-full border-b-[0.135rem] border-footerLinkColor bg-transparent leading-none placeholder-footerLinkColor focus:outline-none h-12 focus:border-white transition-all"
                placeholder="Enter your Email-Adress"
              />
              <div className="max-w-2xl">
                <BigButton type="footer">Submit</BigButton>
              </div>
            </form>
          </div>
        </div>
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  justify-items-start w-auto gap-8 lg:gap-14 ">
          <ul className="flex flex-col gap-[0.5rem] lg:gap-[1.5rem]">
            <li className="text-[1.40rem] sm:text-[1.60rem] lg:text-[1.75rem] text-white font-bold">
              Mintii Account
            </li>
            <Link to={"/"}>
              <li className="text-[1.40rem] lg:text-[1.75rem] text-footerLinkColor hover:text-white transition-all">
                Profile
              </li>
            </Link>
            <Link to={"/"}>
              <li className="text-[1.40rem] lg:text-[1.75rem] text-footerLinkColor hover:text-white transition-all">
                Setting
              </li>
            </Link>
            <Link to={"/"}>
              <li className="text-[1.40rem] lg:text-[1.75rem] text-footerLinkColor hover:text-white transition-all">
                Privacy policy
              </li>
            </Link>
            <Link to={"/"}>
              <li className="text-[1.40rem] lg:text-[1.75rem] text-footerLinkColor hover:text-white transition-all">
                Terms and condition
              </li>
            </Link>
          </ul>
          <ul className="flex flex-col gap-[0.8rem] lg:gap-[1.5rem] lg:pl-10">
            <li className="text-[1.40rem] lg:text-[1.75rem] text-white font-bold">
              Collections
            </li>
            <Link to={"/"}>
              <li className="text-[1.40rem] lg:text-[1.75rem] text-footerLinkColor hover:text-white transition-all">
                Mint NFT
              </li>
            </Link>
            <Link to={"/"}>
              <li className="text-[1.40rem] lg:text-[1.75rem] text-footerLinkColor hover:text-white transition-all">
                Buy NFT
              </li>
            </Link>
            <Link to={"/"}>
              <li className="text-[1.40rem] lg:text-[1.75rem] text-footerLinkColor hover:text-white transition-all">
                Sell NFT
              </li>
            </Link>
          </ul>
          <ul className="flex flex-col gap-[0.8rem] lg:gap-[1.5rem]">
            <li className="text-[1.40rem] lg:text-[1.75rem] text-white font-bold">
              About Us
            </li>
            <Link to={"/"}>
              <li className="text-[1.40rem] lg:text-[1.75rem] text-footerLinkColor hover:text-white transition-all">
                Mintii
              </li>
            </Link>
            <Link to={"/"}>
              <li className="text-[1.40rem] lg:text-[1.75rem] text-footerLinkColor hover:text-white transition-all">
                Artists
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
