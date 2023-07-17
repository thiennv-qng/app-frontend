import {
  Fragment,
  Suspense,
  lazy,
  useDeferredValue,
  useEffect,
  useState,
} from "react";
const RenderResult = lazy(() => import("./renderResult"));

const UseDeffered = () => {
  const [query, setQuery] = useState<number>(0);

  const deferredQuery = useDeferredValue(query);

  useEffect(() => {
    console.log("query: ", query);
  }, [query]);

  return (
    <Fragment>
      <label>
        Enter number:
        <input
          value={query}
          onChange={(e) => setQuery(Number(e.target.value))}
        />
      </label>
      <Suspense fallback={<h2>Loading...</h2>}>
        <RenderResult number={deferredQuery} />
      </Suspense>
    </Fragment>
  );
};

export default UseDeffered;
