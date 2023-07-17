import { useCallback, useDebugValue, useEffect, useState } from "react";

const UseDebugValue = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [handleClick]);

  useDebugValue(count, (count) => `Total clicks: ${count}`);

  return count;
};

export default UseDebugValue;
