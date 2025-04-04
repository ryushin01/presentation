import Lottie from "lottie-react";
import loading from "./loading.json";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-40 flex flex-col justify-center items-center bg-grayscaleD">
      <Lottie animationData={loading} />
    </div>
  );
};

export default Loading;
