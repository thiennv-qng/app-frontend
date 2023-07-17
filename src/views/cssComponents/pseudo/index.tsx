import "./style.scss";

const Pseudo = () => {
  const onFullscreen = async () => {
    try {
      const ctx = document.getElementById("pseudo_fullscreen");
      if (!ctx) return;
      await ctx.requestFullscreen();
    } catch (er: any) {
      console.log(er);
    }
  };

  return (
    <div className="flex flex-row flex-wrap gap-[24px]">
      <h2 className="text-[24px] w-full font-bold">CSS pseudo-class</h2>
      <div className="flex flex-col gap-[12px]">
        {/* Autofill */}
        <label className="flex flex-col">
          :autofill
          <input
            className="rc-input pseudo-autofill"
            placeholder="Enter email"
            name="email"
            type="email"
            autoComplete="on"
          />
        </label>

        {/* Focus within */}
        <label className="pseudo-fw-label flex flex-col">
          :focus-within
          <input
            className="rc-input pseudo-focus-within"
            placeholder="Enter email"
            name="email"
            type="email"
            autoComplete="on"
          />
        </label>

        {/* Checked */}
        <label className="rc-label pseudo-label">
          :checked
          <input type="checkbox" className="pseudo-checkbox" />
        </label>

        {/* Default */}
        <label className="rc-label pseudo-default">
          :default
          <input
            type="checkbox"
            className="rc-input"
            defaultValue="Default value"
            placeholder="Enter default"
            checked
          />
        </label>

        {/* Disabled */}
        <label className="flex flex-col pseudo-disabled">
          :disabled
          <input
            type="text"
            className="rc-input"
            placeholder="Input disabled"
            disabled
          />
        </label>

        {/* Enable */}
        <label className="flex flex-col">
          :enabled
          <input
            className="rc-input pseudo-enabled"
            placeholder="Enter email"
            name="email"
            type="email"
            autoComplete="on"
          />
        </label>

        {/* Empty */}
        <div className="pseudo-empty-container flex flex-col gap-[8px] bg-slate-100 p-[12px]">
          <span>:empty</span>
          <div className="pseudo-empty"></div>
          <div className="pseudo-empty">Item1</div>
          <div className="pseudo-empty">Item2</div>
          <div className="here">Item3</div>
          <div className="pseudo-empty">Item4</div>
        </div>

        {/* Active */}
        <div className="pseudo-active-container flex flex-col gap-[8px]">
          <span>:active</span>
          <button className="pseudo-active bg-red-400 rounded-[8px] p-[2px_8px]">
            on click
          </button>
        </div>

        {/* Fullscreen */}
        <div
          id="pseudo_fullscreen"
          className="pseudo-fullscreen w-full h-[25px] bg-slate-100"
        >
          Fullscreen element
        </div>
        <button onClick={onFullscreen}>Fullscreen</button>

        {/* In-range */}
        <label className="flex flex-col">
          :in-range 4-12
          <input
            className="rc-input pseudo-in-range"
            placeholder="Enter number"
            type="number"
            min={4}
            max={12}
          />
        </label>

        {/* *-of-type */}
        <div className="pseudo-of-type-container flex flex-col gap-[8px]">
          <p>:nth-of-type()</p>
          <div>
            <h1 className="text-[24px] font-bold">heading 1</h1>
            <h2 className="text-[18px] font-bold">heading 2 - index: 1</h2>
            <h3 className="text-[16px] font-bold">heading 3 - index: 1</h3>
            <h2 className="text-[18px] font-bold">heading 2 - index: 2</h2>
            <h2 className="text-[18px] font-bold">heading 2 - index: 3</h2>
            <h3 className="text-[16px] font-bold">heading 3 - index: 2</h3>
            <h3 className="text-[16px] font-bold">heading 3 - index: 3</h3>
            <h3 className="text-[16px] font-bold">heading 3 - index: 4</h3>
          </div>
          <div className="child flex flex-row flex-wrap gap-[12px]">
            {new Array(40).fill("").map((_, idx) => (
              <div
                className="square w-[20px] h-[20px] bg-slate-400"
                key={idx}
              />
            ))}
          </div>
        </div>

        {/* :where :is */}
        <div className="pseudo-where-is-container flex flex-col gap-[8px]">
          <p>:is()</p>
          <div className="pseudo-where">
            <div>
              <p>
                <h1>H1 in tag: p</h1>
              </p>
              <div className="div-1">
                <h1>H1 in tag: div</h1>
              </div>
              <ul>
                <li>
                  <h1>H1 in tag: ul li</h1>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pseudo;
