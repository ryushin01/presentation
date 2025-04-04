const ProjectMetadata = ({
  targetDevice,
  deployUrl,
  projectName,
  description,
  techStacks,
  mainTask,
  workDetail,
  repoUrl,
}) => {
  return (
    <>
      <div className="py-8">
        <h2 className="text-2xl">{projectName}</h2>
        <h3 className="text-lg text-grayscaleC">{description}</h3>
      </div>
      <div className="flex flex-col gap-8 py-8 border-t border-b border-grayscaleA/10">
        <div className="flex flex-col">
          <h4 className="text-lg">대응 범위</h4>
          <span className="text-sm text-grayscaleC">{targetDevice}</span>
        </div>
        <div className="flex flex-col">
          <h4 className="text-lg">기술 스택</h4>
          <span className="text-sm text-grayscaleC">
            {techStacks?.join(", ")}
          </span>
        </div>
        <div className="flex flex-col">
          <h4 className="text-lg">주요 작업</h4>
          <span className="text-sm text-grayscaleC">
            {mainTask?.join(", ")}
          </span>
        </div>
        <div className="flex flex-col">
          <h4 className="text-lg">작업 내용</h4>

          {workDetail?.map(({ id, title, description }, index) => {
            return (
              <div key={id} className="pb-4 pt-3">
                <h5>
                  {index + 1}.{title}
                </h5>

                {description?.map(({ id, subTitle, content }, index) => {
                  return (
                    <div key={id} className="flex flex-col gap-2 pl-4">
                      <h6>- {subTitle}</h6>

                      <div className="text-grayscaleC pb-5 flex flex-col gap-2">
                        {content.map(({ id, text }) => {
                          return <span key={id}> · {text}</span>;
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className="flex flex-col">
          <h4 className="text-lg">배포 링크</h4>
          <a
            href={deployUrl}
            className="text-sm text-grayscaleC"
            target="_blank"
            rel="noopener noreferrer"
          >
            {deployUrl}
          </a>
        </div>
        <div className="flex flex-col">
          <h4 className="text-lg">저장소 링크</h4>
          <a
            href={repoUrl}
            className="text-sm text-grayscaleC"
            target="_blank"
            rel="noopener noreferrer"
          >
            {repoUrl}
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectMetadata;
