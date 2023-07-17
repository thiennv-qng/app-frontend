import RenderRouter from "../router";
import SideBar from "./sidebar";

const Views = () => {
  return (
    <div className="flex flex-row  gap-[24px] p-[12px] min-h-screen">
      <div>
        <SideBar />
      </div>
      <div className="flex-1 rounded-[8px] shadow-[0_0_12px_1px_#ececec] p-[16px]">
        <RenderRouter />
      </div>
    </div>
  );
};

export default Views;
