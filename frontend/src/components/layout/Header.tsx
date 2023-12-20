import { IoMenu } from "react-icons/io5";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { menuItems } from "../../data/data";
import ThemeToggle from "../UI/ThemeToggle";
import Logo from "./Logo";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../hook/hook";
import { signOut } from "../../store/feature/authSlice";
import { AiFillCaretDown } from "react-icons/ai";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { auth, status, error } = useSelector((state: RootState) => state.auth);
  const location = useLocation();
  const { pathname } = location;

  const logoutHandler = () => {
    dispatch(signOut());
    navigate("/signin");
  };

  return (
    <div className="sticky -top-1 z-[10] w-full bg-base-300 p-[0.8rem] shadow">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <IoMenu size={24} />
            </label>
            
            <ul
              tabIndex={0}
              className="menu dropdown-content menu-sm z-[11] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
            >
              {menuItems.map((item) => (
                <NavLink
                  className={`${
                    pathname === item.path &&
                    "font-bold text-primary underline underline-offset-2"
                  }`}
                  key={item.label}
                  to={item.path}
                >
                  <li>
                    <p>{item.label}</p>
                  </li>
                </NavLink>
              ))}
            </ul>
          </div>
          <Logo />
        </div>
        <Link className="lg:hidden" to="/">
          <h1 className="font-arimo font-bold">LIGHTNING STORE LAO.</h1>
        </Link>
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {menuItems.map((item) => (
              <NavLink
                className={`${
                  pathname === item.path &&
                  "font-bold text-primary underline underline-offset-2"
                }`}
                key={item.label}
                to={item.path}
              >
                <li>
                  <p>{item.label}</p>
                </li>
              </NavLink>
            ))}
          </ul>
        </div>
        <div className="flex items-center">
          <ThemeToggle />
          {auth ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost rounded-btn"
              >
                {auth?.fullname.split(" ")[0]}
                <AiFillCaretDown />
              </div>
              <ul
                tabIndex={0}
                className="menu dropdown-content z-[1] mt-4 w-52 rounded-box bg-base-100 p-2 shadow"
              >
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/admin/dashboard">Dashboard</Link>
                </li>
                <li onClick={logoutHandler}>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/signin">
              <button className="btn btn-primary btn-sm">Sign In</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
