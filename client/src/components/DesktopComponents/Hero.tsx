export default function Hero() {
    return (
        <>
            <div className="max-w-[900px] mx-auto mt-32">
        <div className="flex flex-col items-center px-6">
          <div className="w-full px-4">
            <div className="flex flex-row items-start justify-between">
              <div className="flex-1 text-left">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h1 className="text-white text-5xl font-medium font-(family-name:--font-jaro)">👋, I'm</h1>
                    <h2 className="text-white text-5xl font-medium font-(family-name:--font-jaro)">
                      Tejas Raman
                    </h2>
                  </div>
                  <p className="text-white text-2xl font-medium font-(family-name:--font-lalezar)">
                    Learn, Code, Create
                  </p>
                  <ul className="text-white space-y-2 max-w-[400px] font-(family-name:--font-konkhmer) font-medium mx-auto sm:mx-0">
                    <li className="flex items-center">
                      <span className="mr-2 mt-1.5 sm:mt-0">•</span>
                      <span>CS Major @ UT Dallas</span>
                    </li>
                    <li className="flex items-start sm:items-center">
                      <span className="mr-2 mt-0">•</span>
                      <span>Learning NLPs, LLMs, and ML models</span>
                    </li>
                    <li className="flex items-start sm:items-center">
                      <span className="mr-2 mt-0">•</span>
                      <span>Build full-stack apps with React, Node, & more</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-0 ml-8">
                <img
                  src="/streamline-freehand-color--programming-user-code.svg"
                  alt="Hero"
                  className="w-[300px] h-[300px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}