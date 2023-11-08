import { Link } from "react-router-dom";
import { logoBgLight } from "../assets/index";
import BigButton from "../components/Buttons/BigButton";

const Footer = () => {
  return (
    <footer className="bg-black ">
      <div className="max-container px-8 py-10 text-white  sm:px-[4.187rem] sm:pb-[5.75rem] sm:pt-[3.637rem] lg:px-[8.187rem] lg:pb-[5.75rem] lg:pt-[3.637rem]">
        <div className="mb-16 flex flex-col items-center justify-between gap-6 font-inter sm:flex-row lg:mb-[5.44rem]">
          <img
            src={logoBgLight}
            alt="Logo"
            className="h-28 w-28  self-start sm:h-auto sm:w-auto"
          />
          <div className="flex flex-col gap-12 sm:w-[60.3%] lg:justify-between lg:gap-[2rem]">
            <h1 className=" font-inter text-5xl text-white sm:text-4xl lg:pl-3   lg:text-3xl lg:leading-10">
              Become an{" "}
              <span className="max-sm:font-FoundryMonoline max-sm:font-bold max-sm:tracking-wider max-sm:text-secondary">
                Early{" "}
              </span>
              Adopter
            </h1>
            <form className="flex flex-col justify-between gap-[1.25rem]  lg:flex-row lg:items-end ">
              <input
                type="text"
                to={"/"}
                className="h-12 w-full border-b-[0.135rem] border-footerLinkColor bg-transparent leading-none placeholder-footerLinkColor transition-all focus:border-white focus:outline-none"
                placeholder="Enter your Email-Adress"
              />
              <div className="max-w-2xl">
                <BigButton type="footer">Submit</BigButton>
              </div>
            </form>
          </div>
        </div>
        <div className=" grid w-auto grid-cols-1 justify-items-start  gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-14 ">
          <ul className="flex flex-col gap-[0.5rem] lg:gap-[1.5rem]">
            <li className="text-[1.40rem] font-bold text-white sm:text-[1.60rem] lg:text-[1.75rem]">
              Mintii Account
            </li>
            <Link to={"/"}>
              <li className="text-[1.40rem] text-footerLinkColor transition-all hover:text-white lg:text-[1.75rem]">
                Profile
              </li>
            </Link>
            <Link to={"/"}>
              <li className="text-[1.40rem] text-footerLinkColor transition-all hover:text-white lg:text-[1.75rem]">
                Setting
              </li>
            </Link>
            <Link to={"/"}>
              <li className="text-[1.40rem] text-footerLinkColor transition-all hover:text-white lg:text-[1.75rem]">
                Privacy policy
              </li>
            </Link>
            <Link to={"/"}>
              <li className="text-[1.40rem] text-footerLinkColor transition-all hover:text-white lg:text-[1.75rem]">
                Terms and condition
              </li>
            </Link>
          </ul>
          <ul className="flex flex-col gap-[0.8rem] lg:gap-[1.5rem] lg:pl-10">
            <li className="text-[1.40rem] font-bold text-white lg:text-[1.75rem]">
              Collections
            </li>
            <Link to={"/"}>
              <li className="text-[1.40rem] text-footerLinkColor transition-all hover:text-white lg:text-[1.75rem]">
                Mint NFT
              </li>
            </Link>
            <Link to={"/"}>
              <li className="text-[1.40rem] text-footerLinkColor transition-all hover:text-white lg:text-[1.75rem]">
                Buy NFT
              </li>
            </Link>
            <Link to={"/"}>
              <li className="text-[1.40rem] text-footerLinkColor transition-all hover:text-white lg:text-[1.75rem]">
                Sell NFT
              </li>
            </Link>
          </ul>
          <ul className="flex flex-col gap-[0.8rem] lg:gap-[1.5rem]">
            <li className="text-[1.40rem] font-bold text-white lg:text-[1.75rem]">
              About Us
            </li>
            <Link to={"/"}>
              <li className="text-[1.40rem] text-footerLinkColor transition-all hover:text-white lg:text-[1.75rem]">
                Mintii
              </li>
            </Link>
            <Link to={"/"}>
              <li className="text-[1.40rem] text-footerLinkColor transition-all hover:text-white lg:text-[1.75rem]">
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
