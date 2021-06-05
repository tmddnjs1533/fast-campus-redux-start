import { ADD_TODO, COMPLETE_TODO, SHOW_ALL, SHOW_COMPLETE } from "./actions";
// state
// ['코딩','점심 먹기']
// [{text: '코딩', done: false}, {text: '점심 먹기', done: false}]
// { todos: [{text: '코딩', done: false}, {text: '점심 먹기', done: false}], filter: 'ALL'}

const initialState = { todos: [], filter: "ALL" };

export function todoApp(previousState = initialState, action) {
  // 초기값을 설정해주는 부분
  // if(previousState === undefined) {
  //   return [];
  // }

  if (action.type === ADD_TODO) {
    return {
      ...previousState,
      todos: [...previousState.todos, { text: action.text, done: false }],
    };
  }

  if (action.type === COMPLETE_TODO) {
    return {
      ...previousState,
      todos: previousState.todos.map((todo, index) => {
        if (index === action.index) {
          return { ...todo, done: true };
        }
        return todo;
      }),
    };
  }
  if (action.type === SHOW_COMPLETE) {
    return {
      ...previousState,
      filter: "COMPLETE",
    };
  }
  if (action.type === SHOW_ALL) {
    return {
      ...previousState,
      filter: "ALL",
    };
  }

  return previousState;
}
