
export default function MobileFooter() {
    return (
        <div className="rounded-lg bg-[#17151D] px-6 py-4 text-base flex flex-col items-center">
          <hr className="w-12 border-t-2 border-[#fff] mb-3 opacity-60" />
          <div className="bg-[#3D3C3C] px-2 py-1 rounded-lg flex gap-1 mb-2 items-center">
            <img
              src="/icons/footer/infoi.svg"
              alt="Skill Sets Logo"
              className="w-6 h-6"
            />
            <p className="text-white leading-3"><span className="text-[8px]">Developed by</span> <br/> <span className="text-xs">Tejas Raman</span></p>
          </div>
          <p className="text-[#D4CBCB] text-xs">Created with React and TailwindCSS</p>
        </div>
      )
}