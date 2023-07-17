import { memo } from "react";

const IMAGE_URL = "https://images5.alphacoders.com/131/thumbbig-1316260.webp";

function ResultItem({ index }: { index: number }) {
  const startTime = performance.now();

  while (performance.now() - startTime < 1) {
    // Do nothing for 1 ms per item to emulate extremely slow code
  }

  return (
    <div className="relative w-[40px] flex justify-center items-center">
      <img
        src={IMAGE_URL}
        style={{ width: "100%", aspectRatio: 1 / 1, objectFit: "cover" }}
      />
      <div className="absolute text-white text-[12px] font-bold">#{index}</div>
    </div>
  );
}

const RenderResult = ({ number }: { number: number }) => {
  const renderList = new Array(number).fill("");

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 24 }}>
      <div className="flex w-[40px] justify-center items-center font-bold text-[12px]">
        {number}
      </div>
      {renderList.map((_, idx) => (
        <ResultItem key={idx} index={idx} />
      ))}
    </div>
  );
};

export default memo(RenderResult);
