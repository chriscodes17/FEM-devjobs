import { useState, useEffect } from "react";

const useScreenSize = (smallScreenThreshold = 480) => {
  const [isSmallScreen, setIsSmallScreen] = useState(
    window.innerWidth < smallScreenThreshold
  );

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < smallScreenThreshold);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [smallScreenThreshold]);

  return isSmallScreen;
};

export default useScreenSize;
