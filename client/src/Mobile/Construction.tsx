import { useEffect } from "react";

export default function Construction() {
    useEffect(() => {
      document.title = "Coming Soon - Tejas";
    }, []);
  
    return (
      <div className="min-h-screen w-full px-6 bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center relative">
        <div className="absolute inset-0 bg-[#252525]"></div>
        <div className="relative z-10 bg-[#1D1C22] p-12 rounded-3xl shadow-xl flex flex-col items-center">
          <h1 className="text-3xl font-bold text-white text-center font-(family-name:--font-IBMPlexSans)">
            Mobile View coming soon
          </h1>
          <p className="mt-3 text-white text-center">(Please resize window or switch to desktop)</p>
        </div>
      </div>
    );
}
