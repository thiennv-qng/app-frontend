import { CSSProperties, useState } from "react";

const DISPLAY_SELECT: CSSProperties["display"][] = [
  "none",
  "block",
  "inline",
  "flex",
  "grid",
  "inline-block",
  "inline-flex",
  "inline-grid",
  "inherit",
  "initial",
];

const Display = () => {
  const [display, setDisplay] = useState<CSSProperties["display"]>("flex");

  return (
    <div className="flex flex-row gap-[24px]">
      <div className="flex flex-1 flex-col gap-[24px]">
        <h2 className="font-bold text-[24px]">Display</h2>
        <div className="flex flex-row flex-wrap gap-[12px] p-[12px] bg-slate-50 rounded-[4px]">
          <span className="p-[2px_8px] rounded-[8px] shadow">{display}</span>
          <div className="w-full h-[1px] bg-slate-200" />
          {DISPLAY_SELECT.map((item) => (
            <label
              className="flex gap-[4px] rounded-[8px] p-[2px_8px] bg-slate-100"
              key={item}
            >
              <input
                value={item}
                onChange={(e) => setDisplay(e.target.value)}
                type="radio"
                name="display"
              />
              {item}
            </label>
          ))}
        </div>
      </div>
      <div className="flex-1 bg-slate-100">
        <div style={{ display }} className="bg-teal-500 p-[4px_12px]">
          <div style={{ display }} className="bg-orange-200 p-[4px_12px]">
            children 1
          </div>
          <div style={{ display }} className="bg-lime-200  p-[4px_12px]">
            children 2
          </div>
        </div>
      </div>
    </div>
  );
};

export default Display;
