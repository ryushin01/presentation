import { NavLink } from "react-router-dom";

const MENU = [
  {
    path: "/main",
    content: "소개",
  },
  {
    path: "/list",
    content: "포트폴리오",
  },
];

const Gnb = () => {
  return (
    <nav className="gnb">
      <ul className="flex gap-6 lg:gap-12 lg:text-2xl">
        {MENU.map(({ path, content }, index) => {
          return (
            <li key={index}>
              <NavLink to={path}>{content}</NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Gnb;
