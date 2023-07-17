import { useReducer } from "react";

type ReacducerActionPayload = {
  index: number;
  value?: string;
};

type ReducerAction = {
  type: "increment" | "decrement" | "remove" | "update";
  payload?: ReacducerActionPayload;
};

type ReducerState = {
  count: number;
  inputs: string[];
};
const reducer = (state: ReducerState, action: ReducerAction) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        inputs: [...state.inputs, ""],
        count: state.count + 1,
      };
    case "decrement":
      const isAvailableCount = state.count > 0;
      return isAvailableCount
        ? {
            ...state,
            inputs: [...state.inputs].splice(0, state.inputs.length - 1),
            count: state.count - 1,
          }
        : { ...state };

    case "update":
      if (
        action.payload?.index === undefined ||
        action.payload?.value === undefined
      )
        return { ...state };

      const clnInputs = [...state.inputs];
      clnInputs.splice(action.payload.index, 1, action.payload.value);

      return {
        ...state,
        inputs: clnInputs,
      };

    case "remove":
      if (action.payload?.index === undefined) return { ...state };

      const clnInput = [...state.inputs];
      clnInput.splice(action.payload.index, 1);

      return {
        ...state,
        inputs: clnInput,
        count: state.count - 1,
      };
    default:
      throw new Error();
  }
};

const InputComponent = ({
  value,
  placeholder,
  onChange,
}: {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
}) => {
  return (
    <input
      className="flex-1 bg-transparent outline-none"
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, inputs: [] });

  return (
    <div className="flex flex-row flex-wrap gap-[24px]">
      <h1 className="w-full text-[24px] font-bold">UseReducer</h1>
      <div className="flex flex-row gap-[8px] items-center rounded-[8px] shadow-inner bg-slate-300 p-[0_8px_0_0]">
        <div className="flex">
          <button
            className="p-[4px_12px] rounded-[8px_0_0_8px] bg-teal-500 shadow-[0_2px_8px_0px_#ececec]"
            onClick={() => dispatch({ type: "increment" })}
          >
            +
          </button>
          <button
            className="p-[4px_12px] rounded-[0_8px_8px_0]  bg-white shadow-[2px_0_8px_0px_#ececec]"
            onClick={() => dispatch({ type: "decrement" })}
          >
            -
          </button>
        </div>
        <div className="text-[12px] font-bold">Total: {state.count}</div>
      </div>
      <div className="flex flex-col w-full gap-[8px]">
        {state.inputs.map((input, idx) => (
          <div
            className="flex bg-slate-200 p-[8px_12px] rounded-[8px]"
            key={idx}
          >
            <InputComponent
              value={input}
              onChange={(value) =>
                dispatch({
                  type: "update",
                  payload: { index: idx, value },
                })
              }
              placeholder={`Input ${idx + 1}`}
            />

            <button
              onClick={() =>
                dispatch({ type: "remove", payload: { index: idx } })
              }
              className="text-[12px] px-[8px] rounded-[8px] bg-slate-50 hover:bg-slate-100"
            >
              remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UseReducer;
