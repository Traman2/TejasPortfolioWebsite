export default function Footer() {
  return (
    <>
      <footer className="mt-20 mb-10">
        <div className="flex flex-col items-center">
          <div className="w-[78px] h-[2px] bg-white/30 mb-6"></div>
          <p className="text-[#F2BEBE] text-sm font-semibold flex items-center space-x-2">
            <span>Personal Website</span>
            <span>•</span>
            <span>&copy; 2025</span>
          </p>
          <p className="text-[#F2BEBE] text-sm font-semibold mt-2">
            Created Using React and Express
          </p>
        </div>
      </footer>
    </>
  );
}
