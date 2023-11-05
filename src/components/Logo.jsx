import { logoBgDark, logoBgLight } from "../../public/assets";

const Logo = ({ type }) => {
  if (type === "header") {
    return <img src={logoBgDark} alt="Logo" />;
  }
  if (type === "footer") {
    return <img src={logoBgLight} alt="Logo" />;
  }
};

export default Logo;
