import { Link } from "react-router-dom";

export default function Alarm() {
  return (
      <Link to="/notice" className="fixed top-1.5 right-1.5 lg:top-3 lg:right-3 z-30 p-3">
          <img src="/presentation/icons/bell.png" alt="벨 아이콘" className="w-9 h-9 lg:w-12 lg:h-12" />
          <span className="animate-ping absolute top-3 right-3 lg:top-1.5 lg:right-1.5 z-40 inline-flex w-1.5 h-1.5 lg:w-3 lg:h-3 rounded-full bg-secondary opacity-75"></span>
      </Link>
  );
}