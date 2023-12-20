import { AiOutlineMenuUnfold } from "react-icons/ai";
import { Link, Outlet } from "react-router-dom";
const AdminLayout = () => {
  return (
    <>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <div className="container mx-auto">
            <label
              htmlFor="my-drawer"
              className="btn drawer-button btn-sm sticky top-24 z-[9]"
            >
              <AiOutlineMenuUnfold className="text-lg" />
            </label>
            <Outlet />
          </div>
        </div>
        <div className="drawer-side z-[99]">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu min-h-full w-80 bg-base-200 p-4 text-base-content">
            {/* Sidebar content here */}
            <li>
              <Link to="/admin/restaurantlist">
                Restaurants
              </Link>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
