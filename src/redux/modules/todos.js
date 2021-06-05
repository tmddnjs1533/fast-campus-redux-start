import { createActions, handleActions } from "redux-actions";

export const { addTodo, completeTodo } = createActions(
  "ADD_TODO",
  "COMPLETE_TODO",
  {
    prefix: "redux-start/todos",
  }
);
// 초기값
const initialState = [];

const reducer = handleActions(
  {
    ADD_TODO: (state, { payload: text }) => [
      ...state,
      { text: text, done: false },
    ],
    COMPLETE_TODO: (state, { payload: n }) =>
      state.map((todo, index) => {
        if (index === n) {
          return { ...todo, done: true };
        }
        return todo;
      }),
  },
  initialState,
  { prefix: "redux-start/todos" }
);

export default reducer;
