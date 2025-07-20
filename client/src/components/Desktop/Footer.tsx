export default function Footer() {
  return (
    <>
      <div className="mt-2 rounded-xl bg-[#17151D] px-12 py-6 text-lg flex flex-col items-center">
        <hr className="w-16 border-t-2 border-[#fff] mb-4 opacity-60" />
        <div className="bg-[#3D3C3C] px-3 py-2 rounded-lg flex gap-1 mb-3 items-center">
          <img
            src="/icons/footer/infoi.svg"
            alt="Skill Sets Logo"
            className="w-8 h-8"
          />
          <p className="text-white leading-3"><span className="text-[9px]">Developed by</span> <br/> <span className="text-sm">Tejas Raman</span></p>
        </div>

        <p className="text-[#D4CBCB] text-sm">Created with React and TailwindCSS</p>
      </div>
    </>
  );
}
