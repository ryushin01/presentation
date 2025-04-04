const ListItem = ({ stackImage, stackName, description }) => {
  return (
    <li className="flex gap-4">
      <div>
        <img src={stackImage} alt={stackName} className="w-14 h-14" />
      </div>
      <div className="flex-1 flex flex-col gap-2">
        <h3 className="text-lg">{stackName}</h3>
        <span className="text-sm text-grayscaleC">
          {description?.map((desc, index) => {
            return (
              <span key={index} className="flex flex-col">
                {desc}
              </span>
            );
          })}
        </span>
      </div>
    </li>
  );
};

export default ListItem;
