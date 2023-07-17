import { createContext, useState } from "react";
import WrapContext, { ChildContext, LastChild } from "./wrapContext";

export type Theme = "light" | "dark";

export type ContextConfig = {
  theme: Theme;
  count: number;
};

export const UIContext = createContext<ContextConfig>({
  count: 0,
  theme: "light",
});

const UseContext = () => {
  const [config, setConfig] = useState<ContextConfig>({
    theme: "light",
    count: 0,
  });

  console.log("re-render - parent: ", config);

  return (
    <div>
      <h1>UseContext</h1>
      <UIContext.Provider value={config}>
        <WrapContext>
          <ChildContext>
            <LastChild />
          </ChildContext>
        </WrapContext>
      </UIContext.Provider>

      <button
        onClick={() =>
          setConfig((prev) => ({
            ...prev,
            theme: prev.theme === "light" ? "dark" : "light",
          }))
        }
      >
        Switch Theme
      </button>
      <button
        onClick={() =>
          setConfig((prev) => ({ ...prev, count: prev.count + 1 }))
        }
      >
        Increment
      </button>
    </div>
  );
};

export default UseContext;

/**
 * 1.Immutable updates: 
 *    import create from 'zustand';
      const useStore = create(set => ({
        todos: [],
        addTodo: (text) =>
          set((state) => ({
            todos: [
              ...state.todos,
              {
                id: state.todos.length + 1,
                text,
                completed: false,
              },
            ],
          })),
      }));

 * 2.Memoization
 * 3.Thunk middleware: 
 *  export const fetchPostsAsync = createAsyncThunk(
      'posts/fetchPosts',
      async () => {
        const response = await fetchPosts();
        return response.data;
      }
    );

    const postsSlice = createSlice({
      name: 'posts',
      initialState: { data: [], status: 'idle', error: null },
      reducers: {},
      extraReducers: (builder) => {
        builder
          .addCase(fetchPostsAsync.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(fetchPostsAsync.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.data = action.payload;
          })
          .addCase(fetchPostsAsync.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          });
      },
    });

export default postsSlice.reducer;
 * 4.Time-travel debugging: devtool
 * 5.Code splitting
 * */
