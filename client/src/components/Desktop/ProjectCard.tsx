interface Props {
  imageURL: string;
  title: string;
  techStack: string[];
  description: string;
  githubURL: string;
  webLink?: string;
}

export default function ProjectCard({
  imageURL,
  title,
  techStack,
  description,
  githubURL,
  webLink,
}: Props) {
  return (
    <>
      <div className="rounded-2xl overflow-hidden bg-[#17151D] shadow-lg flex flex-col group">
        <div className="relative flex justify-center items-center">
          <img
            src={imageURL}
            alt="ElevAIte Preview"
            className="max-w-full max-h-full"
          />
          <div className="absolute inset-0 bg-[#17151D] opacity-60" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="flex gap-2">
              <a
                href={githubURL}
                target="_blank"
                className="cursor-pointer bg-gray-500/40 rounded-full p-3 flex items-center justify-center shadow-md hover:bg-gray-500 transition"
              >
                <img
                  src="/icons/analytics/github.svg"
                  alt="GitHub"
                  className="w-6 h-6"
                />
              </a>
              {webLink && (
                <>
                  <a
                    href={webLink}
                    target="_blank"
                    className="cursor-pointer bg-gray-500/40 rounded-full p-3 flex items-center justify-center shadow-md hover:bg-gray-500 transition"
                  >
                    <img
                      src="/icons/analytics/eye.svg"
                      alt="View"
                      className="w-6 h-6"
                    />
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="px-6 pb-6 pt-4 flex flex-col">
          <div className="text-lg font-semibold text-white mb-3">{title}</div>
          <div className="flex flex-wrap gap-2 mb-4">
            {techStack.map((tech) => {
              const iconMap: Record<string, string> = {
                node: 'nodejs.svg',
                "scikit-learn": 'scikitlearn.svg',
                pycharm: 'pycharm.svg',
                python: 'python.svg',
                react: 'react.svg',
                tailwindcss: 'tailwindcss.svg',
                tensorflow: 'tensorflow.svg',
                typescript: 'typescript.svg',
                visualstudio: 'visualstudio.svg',
                vscode: 'vscode.svg',
                Javascipt: 'javascript.svg',
                matplotlib: 'matplotlib.svg',
                mongodb: 'mongodb.svg',
                figma: 'figma.svg',
                git: 'git.svg',
                intellij: 'intellij.svg',
                express: 'express.svg',
                clion: 'clion.svg',
                cplusplus: 'cplusplus.svg',
                csharp: 'csharp.svg',
              };
              const normalized = tech.toLowerCase().replace(/\s+/g, '');
              const iconFile = iconMap[normalized] || iconMap[tech.toLowerCase()];
              return iconFile ? (
                <span key={tech} className="rounded-full bg-[#0E4C59] text-white px-3 py-1 text-xs font-medium flex items-center gap-1">
                  <img
                    src={`/icons/techstack/${iconFile}`}
                    alt={tech}
                    className="w-4 h-4 mr-1 inline-block"
                  />
                  {tech}
                </span>
              ) : (
                <span
                  key={tech}
                  className="rounded-full bg-[#0E4C59] text-white px-3 py-1 text-xs font-medium"
                >
                  {tech}
                </span>
              );
            })}
          </div>
          <div className="text-[#CDD2D3] mt-2 text-sm">{description}</div>
        </div>
      </div>
    </>
  );
}
