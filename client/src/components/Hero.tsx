export default function Hero() {
    return (
        <>
            <div className="max-w-[900px] mx-auto mt-40 sm:mt-32">
        <div className="flex flex-col items-center px-4 sm:px-6 md:px-8">
          <div className="w-full px-4">
            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between">
              <div className="flex-1 text-center sm:text-left">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h1 className="text-white text-4xl sm:text-5xl font-bold font-(family-name:--font-jaro)">👋, I'm</h1>
                    <h2 className="text-white text-4xl sm:text-5xl font-bold font-(family-name:--font-jaro)">
                      Tejas Raman
                    </h2>
                  </div>
                  <p className="text-white text-xl sm:text-2xl font-semibold font-(family-name:--font-lalezar)">
                    Learn, Code, Create
                  </p>
                  <ul className="text-white space-y-2 max-w-[400px] font-(family-name:--font-konkhmer) font-semibold mx-auto sm:mx-0">
                    <li className="flex items-start sm:items-center">
                      <span className="mr-2 mt-1.5 sm:mt-0">•</span>
                      <span>CS Major @ UT Dallas</span>
                    </li>
                    <li className="flex items-start sm:items-center">
                      <span className="mr-2 mt-1.5 sm:mt-0">•</span>
                      <span>Learning NLPs, LLMs, and ML models</span>
                    </li>
                    <li className="flex items-start sm:items-center">
                      <span className="mr-2 mt-1.5 sm:mt-0">•</span>
                      <span>Build full-stack apps with React, Node, & more</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 sm:mt-0 sm:ml-8">
                <img
                  src="/streamline-freehand-color--programming-user-code.svg"
                  alt="Hero"
                  className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}