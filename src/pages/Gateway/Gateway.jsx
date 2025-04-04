import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "@components/Loading/Loading";

const Gateway = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2600);
  }, []);

  return (
    <>
      {loading && <Loading />}
      <main className="fixed inset-0 z-20 flex flex-col justify-center items-center gap-40 bg-grayscaleD">
        <Link to="/main" className="enter">
          포트폴리오 페이지로 이동하기
        </Link>
      </main>
    </>
  );
};

export default Gateway;
