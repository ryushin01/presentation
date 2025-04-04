import { useEffect, useState } from "react";
import { API } from "@/config";
import Loading from "@components/Loading/Loading";
import ListItem from "@pages/Main/components/Skillset/components/ListItem/ListItem";
import axios from "axios";

const Skillset = () => {
  const [loading, setLoading] = useState(true);
  const [skillsetData, setSkillsetData] = useState([]);

  const getSkillsetData = async () => {
    try {
      const response = await axios.get(API.SKILLSET);
      setSkillsetData(response.data.result);
      setLoading(false);
    } catch (error) {
      alert("Skillset.jsx > skillsetData.json와의 통신에서 발생한 에러입니다.");
    }
  };

  useEffect(() => {
    setLoading(true);
    getSkillsetData();
  }, []);

  return (
    <>
      {loading && <Loading />}
      <section className="py-20 lg:py-40">
        <div className="max-w-screen-2xl mx-auto px-4">
          <h2 className="mb-8 lg:text-2xl">기술 스택</h2>
          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-12">
            {skillsetData.map(
              ({ stackImage, stackName, description }, index) => {
                return (
                  <ListItem
                    key={index}
                    stackImage={stackImage}
                    stackName={stackName}
                    description={description}
                  />
                );
              }
            )}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Skillset;
