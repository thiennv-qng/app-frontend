import { Route, Routes } from "react-router-dom";

// React.js system hooks
import UseDeffered from "../views/systemHooks/useDeffered";
import UseId from "../views/systemHooks/useId";
import UseImperativeHandle from "../views/systemHooks/useImperativeHandle";
import UseInsertionEffect from "../views/systemHooks/useInsertionEffect";
import UseMemo from "../views/systemHooks/useMemo";
import UseState from "../views/systemHooks/useState";
import UseCallback from "../views/systemHooks/useCallback";
import UseContext from "../views/systemHooks/useContext";
import UseReducer from "../views/systemHooks/useReducer";
import UseTransition from "../views/systemHooks/useTransition";

// Css Components
import Display from "../views/cssComponents/display";
import Pseudo from "../views/cssComponents/pseudo";

const RenderRouter = () => {
  return (
    <Routes>
      {/* React.js System Hooks */}
      <Route path="/" element={<UseState />} />
      <Route path="/useState" element={<UseState />} />
      <Route path="/useState" element={<UseState />} />
      <Route path="/useCallback" element={<UseCallback />} />
      <Route path="/useMemo" element={<UseMemo />} />
      <Route path="/useContext" element={<UseContext />} />
      <Route path="/useDeffered" element={<UseDeffered />} />
      <Route path="/useId" element={<UseId />} />
      <Route path="/useDeffered" element={<UseDeffered />} />
      <Route path="/useImperativeHandle" element={<UseImperativeHandle />} />
      <Route path="/useInsertionEffect" element={<UseInsertionEffect />} />
      <Route path="/useReducer" element={<UseReducer />} />
      <Route path="/useTransition" element={<UseTransition />} />

      {/* CSS  */}
      <Route path="/display" element={<Display />} />
      <Route path="/pseudo" element={<Pseudo />} />

      {/* Redirect */}
      <Route path="*" element={<UseState />} />
    </Routes>
  );
};

export default RenderRouter;
