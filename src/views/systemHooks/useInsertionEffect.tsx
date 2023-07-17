import { useLayoutEffect, useRef, useState } from "react";

const UseInsertionEffect = () => {
  const [count, setCount] = useState(1);
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    console.log("ref.current ", ref.current);

    if (ref.current) {
      const { height } = ref.current.getBoundingClientRect();
      ref.current.setAttribute(
        "style",
        `height: ${height + 20}px; background: red; padding: 12px`
      );
      console.log("Measured tooltip height: ", height);
    }
  }, []);

  // useEffect(() => {
  //   console.log("ref.current ", ref.current);
  //   if (ref.current) {
  //     const { height } = ref.current.getBoundingClientRect();
  //     ref.current.setAttribute(
  //       "style",
  //       `height: ${height + 20}px; background: red; padding: 12px`
  //     );
  //   }
  // }, []);

  return (
    <div>
      <h1>UseInsertionEffect</h1>
      <div ref={ref}>{count}</div>
      <button onClick={() => setCount((prev) => prev + 1)}>Increases ++</button>
    </div>
  );
};

export default UseInsertionEffect;
