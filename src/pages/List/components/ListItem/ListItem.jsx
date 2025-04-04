import { useNavigate } from "react-router-dom";

const ListItem = ({ id, projectName, projectImage, description }) => {
  const navigate = useNavigate();

  const goToDetail = () => {
    navigate(`/detail/${id}`, {
      state: { id: id },
    });
  };

  return (
    <li className="relative pb-[150%] overflow-hidden rounded-2xl bg-grayscaleE shadow transition-all hover:scale-110">
      <button
        type="button"
        className="absolute inset-0 z-10 flex flex-col"
        onClick={goToDetail}
      >
        <span className="flex-1 w-full relative">
          <img
            src={projectImage[0].src}
            alt={projectName}
            className="absolute w-full h-full p-4 object-cover"
          />
        </span>
        <h3 className="flex flex-col items-start w-full px-4 pb-4">
          <span className="text-lg">{projectName}</span>
          <span className="text-sm text-grayscaleC">{description}</span>
        </h3>
      </button>
    </li>
  );
};

export default ListItem;
