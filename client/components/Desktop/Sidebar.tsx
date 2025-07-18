export default function Sidebar() {
  return (
    <>
      <div className="w-[280px] h-full flex flex-col bg-[#1D1C22] relative rounded-xl">
        <div className="flex flex-col items-center mt-8 mb-10">
          <img
            src="/icons/SidebarStats/programHead.svg"
            alt="Logo"
            className="w-[65px] h-[65px] mb-2"
          />

          <div className="text-xl text-white font-bold">Tejas Raman</div>
          <div className="text-[#E2CACA]">CS Major @UT Dallas</div>
        </div>
        <div className="absolute left-1/4 top-[23%] -translate-x-1/6 bg-[#2F2F38] px-8 flex rounded-4xl gap-4 shadow-lg z-10">
          <a
            className="rounded"
            href="https://github.com/traman2"
            target="_blank"
          >
            <img
              src="/icons/SidebarStats/github.svg"
              alt="Logo 1"
              className="w-12 h-12 transition-transform duration-200 ease-in-out hover:scale-110 cursor-pointer"
            />
          </a>

          <a
            className="rounded"
            href="mailto:tejassraman@gmail.com"
            target="_blank"
          >
            <img
              src="/icons/SidebarStats/email.svg"
              alt="Logo 2"
              className="w-12 h-12 transition-transform duration-200 ease-in-out hover:scale-110 cursor-pointer"
            />
          </a>

          <a
            className="rounded"
            href="https://linkedin.com/in/tejas-raman-1a892b255/"
            target="_blank"
          >
            <img
              src="/icons/SidebarStats/linkdin.svg"
              alt="Logo 3"
              className="w-12 h-12 transition-transform duration-200 ease-in-out hover:scale-110 cursor-pointer"
            />
          </a>
        </div>
        <div className="bg-[#17151D] px-3 flex-1 overflow-auto">
          <div className="text-white font-bold mt-12 flex flex-col gap-1">
            <h1 className="text-md mb-2">Navigation Menu</h1>
            <button>
              <div className="flex gap-4 rounded-xl bg-[#2F2F38] py-3 pl-3">
                <img
                  src="/icons/SidebarStats/home.svg"
                  alt="Logo 3"
                  className="w-5 h-5"
                />
                <p className="text-sm">Home</p>
              </div>
            </button>
            <button>
              <div className="flex gap-4 rounded-lg py-3 pl-3 hover:bg-[#2F2F38]">
                <img
                  src="/icons/SidebarStats/folders.svg"
                  alt="Logo 3"
                  className="w-5 h-5"
                />
                <p className="text-sm">Projects</p>
              </div>
            </button>
            <button>
              <div className="flex gap-4 rounded-lg py-3 pl-3 hover:bg-[#2F2F38]">
                <img
                  src="/icons/SidebarStats/contact.svg"
                  alt="Logo 3"
                  className="w-5 h-5"
                />
                <p className="text-sm">Contact Me</p>
              </div>
            </button>
          </div>
          <div className="text-white font-bold mt-6">
            <h1 className="text-md mb-2">Traman2 Github Stats</h1>
            <img
              src="https://github-readme-streak-stats.herokuapp.com?user=traman2&theme=radical&ring=ff0000&fire=ff0000&currStreakLabel=ffffff"
              width="100%"
            />
          </div>
        </div>
        <div className="self-center">
          <a
            href="/Tejas_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block py-2 bg-[#6DED97] align-middle px-8 my-4 rounded-xl text-lg font-semibold text-black hover:opacity-90 transition"
          >
            Download CV
          </a>
        </div>
      </div>
    </>
  );
}
