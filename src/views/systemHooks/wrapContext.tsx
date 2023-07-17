import { ReactNode, useContext, useEffect } from "react";
import { UIContext } from "./useContext";

export const ChildContext = ({ children }: { children: ReactNode }) => {
  const { theme } = useContext(UIContext);

  useEffect(() => {
    console.log("re-render - ChildContext: ", theme);
  }, [theme]);

  return (
    <div>
      <h3>ChildContext</h3>
      <p>{theme}</p>
      <div>{children}</div>
    </div>
  );
};

export const LastChild = () => {
  useEffect(() => {
    console.log("re-render - LastChild: 2");
  }, []);

  return (
    <div>
      <h3>LastChild</h3>
    </div>
  );
};

const WrapContext = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    console.log("re-render - WrapContext");
  }, []);

  return (
    <div>
      <h2>WrapContext</h2>
      <div>{children}</div>
    </div>
  );
};

export default WrapContext;
