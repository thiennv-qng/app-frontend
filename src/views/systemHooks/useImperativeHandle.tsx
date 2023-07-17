import { forwardRef, useImperativeHandle, useRef, useState } from "react";

const RANDOM_COLORS = ["blue", "green", "yellow", "gray", "red", "purple"];

type LastChildRef = {
  handleLastChildEvent: () => void;
};

const LastChildComponent = forwardRef<LastChildRef>((_, ref) => {
  const [background, setBackground] = useState("red");

  useImperativeHandle(ref, () => ({
    handleLastChildEvent() {
      console.log("start 2");

      const randomBg =
        RANDOM_COLORS[Math.floor(Math.random() * RANDOM_COLORS.length)];

      setBackground(randomBg);
    },
  }));

  return (
    <div style={{ background, padding: 12 }}>
      <h3>LastChild</h3>
    </div>
  );
});

type ChildRef = {
  handleChildEvent: () => void;
};

const ChildComponent = forwardRef<ChildRef>((_, ref) => {
  const [background, setBackground] = useState("green");
  const lastchildRef = useRef<LastChildRef>(null);

  useImperativeHandle(ref, () => ({
    handleChildEvent() {
      console.log("start");
      if (!lastchildRef.current) return;

      const randomBg =
        RANDOM_COLORS[Math.floor(Math.random() * RANDOM_COLORS.length)];

      setBackground(randomBg);
      lastchildRef.current.handleLastChildEvent();
    },
  }));

  return (
    <div style={{ background, padding: 16 }}>
      <h2>ChildComponent</h2>
      <LastChildComponent ref={lastchildRef} />
    </div>
  );
});

const UseImperativeHandle = () => {
  const childRef = useRef<ChildRef>(null);

  const onClick = () => {
    if (childRef.current) childRef.current.handleChildEvent();
  };

  return (
    <div style={{ background: "gray", padding: 16 }}>
      <h1>UseImperativeHandle</h1>

      <ChildComponent ref={childRef} />

      <button onClick={onClick}>Click</button>
    </div>
  );
};

export default UseImperativeHandle;
