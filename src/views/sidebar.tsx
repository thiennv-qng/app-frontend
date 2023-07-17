import { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type SideBarType = "reactjs" | "css";

const REACT_ROUTERS: Record<string, string> = {
  useState: "/useState",
  useCallback: "/useCallback",
  useDeffered: "/useDeffered",
  useId: "/useId",
  useImperativeHandle: "/useImperativeHandle",
  useInsertionEffect: "/useInsertionEffect",
  useMemo: "/useMemo",
  useContext: "/useContext",
  useDebugValue: "/useDebugValue",
  useReducer: "/useReducer",
  useTransition: "/useTransition",
};

const CSS_ROUTERS: Record<string, string> = {
  display: "/display",
  pseudo: "/pseudo",
};

const SideBar = () => {
  const [sidebarType, setSidebarType] = useState<SideBarType>("reactjs");
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const renderRoutes = useMemo(() => {
    if (sidebarType === "reactjs") return REACT_ROUTERS;
    return CSS_ROUTERS;
  }, [sidebarType]);

  return (
    <div className="flex flex-col gap-[12px] h-full min-w-[145px]">
      <div className="flex flex-col flex-1 gap-[12px]">
        {Object.keys(renderRoutes).map((key) => (
          <div
            className={`p-[4px_12px] rounded-[8px] shadow cursor-pointer hover:bg-blue-100 ${
              pathname === renderRoutes[key] ? "bg-blue-100" : ""
            }`}
            onClick={() => navigate(renderRoutes[key])}
            key={key}
          >
            <span className="text-[12px] ">{key}</span>
          </div>
        ))}
      </div>
      <div className="flex ">
        <button
          onClick={() => setSidebarType("reactjs")}
          className={`flex-1 py-[4px] rounded-[8px_0_0_8px] ${
            sidebarType === "reactjs"
              ? "bg-red-400"
              : "bg-slate-50 shadow-inner"
          }`}
        >
          🧠
        </button>
        <button
          onClick={() => setSidebarType("css")}
          className={`flex-1  py-[4px] rounded-[0_8px_8px_0]  ${
            sidebarType === "css" ? "bg-red-400" : "bg-slate-50 shadow-inner"
          }`}
        >
          🫀
        </button>
      </div>
    </div>
  );
};

export default SideBar;
