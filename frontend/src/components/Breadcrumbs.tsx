import { FaFolder } from "react-icons/fa";
import { FaFolderTree } from "react-icons/fa6";
import { Link } from "react-router-dom";

type Props = {
  pathname: string;
};

const Breadcrumbs = (props: Props) => {
  const { pathname } = props;
  const pathParts = pathname.split("/").filter((part) => part !== "");

  return (
    <div className="breadcrumbs text-sm">
      <ul>
        {pathParts.map((part, index) => (
          <li key={index}>
            <Link to={`/${pathParts.slice(0, index + 1).join("/")}`}>
              {part}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
