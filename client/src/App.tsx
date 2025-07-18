import { useEffect, useState } from "react";
import SocketLayout from "./Desktop/SocketLayout";
import Construction from "./Mobile/Construction";

function App() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 868);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile ? (
        <>
          <Construction/>
        </>
      ) : (
        <>
          <SocketLayout />
        </>
      )}
    </>
  );
}

export default App;
