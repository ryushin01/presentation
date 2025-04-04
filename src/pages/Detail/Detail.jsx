import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { API } from "@/config";
import Loading from "@components/Loading/Loading";
import ProjectImageSwiper from "@pages/Detail/components/ProjectImageSwiper/ProjectImageSwiper";
import ProjectMetadata from "@pages/Detail/components/ProjectMetadata/ProjectMetadata";
import axios from "axios";

const Detail = () => {
  const [loading, setLoading] = useState(true);
  const [projectData, setProjectData] = useState([]);
  const location = useLocation();
  const { id } = location.state;

  const getProjectData = async (id) => {
    try {
      const response = await axios.get(API.PORTFOLIO);
      setProjectData(response.data.result[id - 1]);
      setLoading(false);
    } catch (error) {
      alert("Detail.jsx > portfolioData.json와의 통신에서 발생한 에러입니다.");
    }
  };

  useEffect(() => {
    setLoading(true);
    getProjectData(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    targetDevice,
    deployUrl,
    projectName,
    projectImage,
    description,
    techStacks,
    mainTask,
    workDetail,
    repoUrl,
  } = projectData;

  return (
    <>
      {loading && <Loading />}
      <main>
        <div className="max-w-screen-2xl mx-auto px-4">
          <section className="min-h-screen py-20 lg:py-40">
            <ProjectImageSwiper projectImage={projectImage} />
            <ProjectMetadata
              targetDevice={targetDevice}
              deployUrl={deployUrl}
              projectName={projectName}
              description={description}
              techStacks={techStacks}
              mainTask={mainTask}
              workDetail={workDetail}
              repoUrl={repoUrl}
            />
          </section>
        </div>
      </main>
    </>
  );
};

export default Detail;
