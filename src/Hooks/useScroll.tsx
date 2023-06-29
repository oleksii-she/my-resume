import { useEffect, useState } from "react";

const useScroll = (): boolean => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;

      if (scrollPercentage >= 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isScrolled;
};

export default useScroll;
