import { Link } from "react-router-dom";
import { logo } from "../../assets/images";

const Logo = () => {
  return (
    <>
      <Link className="hidden lg:flex" to="/">
        <div className="rounded-full bg-white px-2 py-4">
          <img className="w-12" src={logo} alt="" />
        </div>
      </Link>
    </>
  );
};

export default Logo;
