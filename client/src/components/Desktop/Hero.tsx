export default function Hero() {
  return (
    <div className="w-full flex items-center justify-between bg-gradient-to-b from-[#343338] to-[#1D1C22] rounded-xl">
      {/* Left Container */}
      <div className="flex flex-col justify-center items-start px-12 py-8 flex-1 max-w-[580px]">
        {/* Gradient Text Block */}
        <div className="bg-gradient-to-r from-white to-[#6DED97] bg-clip-text text-transparent">
          <h2 className="text-5xl font-normal mb-2">Hello I&apos;m</h2>
          <h1 className="text-5xl font-extrabold mb-4">Tejas Raman</h1>
        </div>
        <p className="text-xl text-white font-bold">Learn, Code, Create</p>
        <p className="text-[#B4B4B4] mt-6">I specialize in full-stack web development using React, Node.js, MongoDB, and TailwindCSS, and I enjoy exploring  ML and AI with tools like scikit-learn, Pandas, and NumPy. </p>
      </div>
      {/* Right Container */}
      <div className="flex items-center justify-center pr-12">
        <img
          src="/icons/header/computerHero.svg"
          alt="Computer Hero Logo"
          className="w-63 h-63 object-contain"
        />
      </div>
    </div>
  );
}
  