interface Props {
  imageURL: string;
  title: string;
  techStack: string[];
  description: string;
}

export default function ProjectCard({
  imageURL,
  title,
  techStack,
  description,
}: Props) {
  return (
    <>
      <div className="rounded-2xl overflow-hidden bg-[#17151D] shadow-lg flex flex-col">
        <div className="relative flex justify-center items-center">
          <img
            src={imageURL}
            alt="ElevAIte Preview"
            className="max-w-full max-h-full"
          />
          <div className="absolute inset-0 bg-[#17151D] opacity-60" />
        </div>
        <div className="px-6 pb-6 pt-4 flex flex-col">
          <div className="text-2xl font-semibold text-white mb-3">{title}</div>
          <div className="flex flex-wrap gap-2 mb-4">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-[#0E4C59] text-white px-3 py-1 text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="text-[#CDD2D3] mt-2 text-sm">{description}</div>
        </div>
      </div>
    </>
  );
}
