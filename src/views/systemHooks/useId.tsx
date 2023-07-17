import { useId, useState } from "react";

const UseId = () => {
  const [, onRefresh] = useState(0);
  const id = useId();

  return (
    <div>
      <h1>seId</h1>
      <p>{id}</p>
      <button onClick={() => onRefresh((prev) => prev + 1)}>Refresh</button>
    </div>
  );
};

export default UseId;
