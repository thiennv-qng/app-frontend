import { useMemo, useState } from "react";

const UseMemo = () => {
  const [count, setCount] = useState(0);

  const memoValue = useMemo(() => {
    console.log("UseMemo: re-render");

    return "Memo variable";
  }, []);
  console.log("count ", count);
  return (
    <div>
      <h1>UseMemo</h1>
      <p>{memoValue}</p>
      <p>{count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increases ++</button>
    </div>
  );
};

export default UseMemo;
