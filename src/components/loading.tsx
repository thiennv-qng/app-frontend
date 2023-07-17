import "./index.scss";
const Loading = ({ size = 32 }: { size?: number }) => {
  return (
    <div style={{ width: size }} className="flex overflow-hidden">
      <div className="loading" style={{ fontSize: size / 2 }}>
        🚚
      </div>
    </div>
  );
};

export default Loading;
