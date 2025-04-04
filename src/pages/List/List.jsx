import { useEffect, useState } from "react";
import { API } from "@/config";
import Loading from "@components/Loading/Loading";
import ListItem from "@pages/List/components/ListItem/ListItem";
import axios from "axios";

const List = () => {
  const [loading, setLoading] = useState(true);
  const [portfolioData, setPortfolioData] = useState([]);

  const getPortfolioData = async () => {
    try {
      const response = await axios.get(API.PORTFOLIO);
      setPortfolioData(response.data.result);
      setLoading(false);
    } catch (error) {
      alert("List.jsx > portfolioData.json와의 통신에서 발생한 에러입니다.");
    }
  };

  useEffect(() => {
    setLoading(true);
    getPortfolioData();
  }, []);

  return (
    <>
      {loading && <Loading />}
      <main>
        <div className="max-w-screen-2xl mx-auto px-4">
          <section className="min-h-screen py-20 lg:py-40">
            <h2 className="mb-8 lg:text-2xl sr-only">포트폴리오</h2>
            <ul className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
              {portfolioData?.map(
                (
                  {
                    id,
                    targetDevice,
                    deployUrl,
                    projectName,
                    projectImage,
                    description,
                    techStacks,
                    mainTask,
                    repoUrl,
                  },
                  index
                ) => {
                  return (
                    <ListItem
                      key={index}
                      id={id}
                      targetDevice={targetDevice}
                      deployUrl={deployUrl}
                      projectName={projectName}
                      projectImage={projectImage}
                      description={description}
                      techStacks={techStacks}
                      mainTask={mainTask}
                      repoUrl={repoUrl}
                    />
                  );
                }
              )}
            </ul>
          </section>
        </div>
      </main>
    </>
  );
};

export default List;
