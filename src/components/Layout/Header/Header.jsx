import { Link, useLocation } from "react-router-dom";
import Gnb from "../Gnb/Gnb";

const Header = ({ isOverHeader }) => {
  const { pathname } = useLocation();

  return (
    <header
      className={`fixed top-0 z-30 w-full ${isOverHeader ? "scrolled" : ""}`}
    >
      <div className="max-w-screen-2xl mx-auto py-6 px-4 flex justify-between items-center">
        <h1>
          <Link
            to="/main"
            className={`lg:text-2xl ${
              pathname.includes("detail") ? "inDetail" : ""
            }`}
          >
            박요진 입니다.
          </Link>
        </h1>
        <Gnb />
      </div>
    </header>
  );
};

export default Header;
