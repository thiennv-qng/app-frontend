import { useCallback, useEffect, useState } from "react";

const UseCallback = () => {
  const [, onRefresh] = useState(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const funcNormal = () => {
    console.log("rerender - normal");

    return "Function Normal";
  };

  const funcUseCallback = useCallback(() => {
    console.log("rerender - useCallback");
    return "Function useCallback";
  }, []);

  useEffect(() => {
    funcNormal();
  }, [funcNormal]);

  useEffect(() => {
    funcUseCallback();
  }, [funcUseCallback]);

  console.log("page rerender");

  // setInterval(() => {
  //   setNum((prev) => prev + 1);
  // }, 2000);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setNum((prev) => prev + 1);
  //   }, 100);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  return (
    <div>
      <h1>UseCallback Component</h1>
      <div>
        {/* <p>Func Normal: {funcNormal()}</p> */}
        {/* <p>Func useCallback: {funcUseCallback()}</p> */}

        <button onClick={() => onRefresh((prev) => prev + 1)}>Refresh</button>
      </div>
    </div>
  );
};

export default UseCallback;
