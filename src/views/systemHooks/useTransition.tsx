import { Suspense, useState, useTransition } from "react";
import RenderResult from "./renderResult";
import Loading from "../../components/loading";
// const RenderResult = lazy(() => import("./renderResult"));

enum TransitionTabs {
  Tab1,
  Tab2,
  Tab3,
}

const TabContent = ({ type }: { type: TransitionTabs }) => {
  if (type === TransitionTabs.Tab3)
    return (
      <Suspense fallback={<h2>Loading...</h2>}>
        <RenderResult number={500} />
      </Suspense>
    );

  return (
    <div className="p-[16px]">
      <span className="font-bold">Current tab: {type + 1}</span>
    </div>
  );
};

const TabNav = ({
  onSelect,
  tab,
  isPending,
}: {
  tab: number;
  onSelect: (tab: number) => void;
  isPending: boolean;
}) => {
  const [currentPointer, setCurrentPointer] = useState(0);

  return (
    <div className="flex gap-[12px]">
      {[0, 1, 2].map((item) => {
        const isActive = tab === item;

        return (
          <button
            className={`flex gap-[4px] p-[4px_12px] rounded-[8px] min-w-[150px] justify-center ${
              isActive ? "bg-teal-500" : "bg-teal-100"
            }`}
            onClick={() => {
              setCurrentPointer(item);
              onSelect(item);
            }}
            key={item}
          >
            Tab ${item + 1}
            {currentPointer === item && isPending && <Loading />}
          </button>
        );
      })}
    </div>
  );
};

const UseTransition = () => {
  const [tab, setTab] = useState(TransitionTabs.Tab1);
  const [isPending, startTransition] = useTransition();

  const onSetTab = (tab: number) => {
    startTransition(() => setTab(tab));
  };

  return (
    <div className="flex flex-col gap-[24px]">
      <TabNav tab={tab} isPending={isPending} onSelect={onSetTab} />
      <TabContent type={tab} />
    </div>
  );
};

export default UseTransition;
