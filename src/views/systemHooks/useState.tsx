/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState } from "react";

let count2 = 0;

// eslint-disable-next-line no-var
// var count3 = 0;
const UseState = () => {
  const [count, setCount] = useState(0);
  // const [, setRefresh] = useState(0);

  //@ts-ignore
  // console.log(count3);
  // eslint-disable-next-line no-var
  // var count3 = 0;

  const onIncreases = () => {
    count2++;
    // count3++;

    // setRefresh((prev) => prev + 1);
    // setCount((prev) => prev++);
    // setCount((prev) => prev + 1);

    // setCount((prev) => {
    //   return prev + 1;
    // });

    console.log("click");
  };

  return (
    <div>
      <h1>UseState Component</h1>
      <div>
        <span>Count1: {count}</span>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div>
        <span>Count2: {count2}</span>
        <button onClick={onIncreases}>+</button>
      </div>
      {/* <div>
        <span>Count3: {count3}</span>
        <button onClick={onIncreases}>+</button>
      </div> */}
    </div>
  );
};

export default UseState;
