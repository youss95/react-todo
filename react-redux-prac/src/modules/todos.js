/*
 *container 에서 action 생성함수 dispatch prop으로 컴포넌트에 넘겨줌
 *
 **/

//type
const CHANGE_INPUT = "todos/CHANGE_INPUT";
const INSERT = "todos/INSERT";
const TOGGLE = "todos/TOGGLE";
const REMOVE = "todos/REMOVE";

//action 생성 함수
export const changeInput = (input) => ({
  type: CHANGE_INPUT,
  input,
});

let id = 3;
export const insert = (text) => ({
  type: INSERT,
  todo: {
    id: id++,
    text,
    done: false,
  },
});

export const toggle = (id) => ({
  type: TOGGLE,
  id,
});

export const remove = (id) => ({
  type: REMOVE,
  id,
});

//초기 상태
const initialState = {
  input: "",
  todos: [
    {
      id: 1,
      text: "basic",
      done: true,
    },
    {
      id: 2,
      text: "medium",
      done: false,
    },
  ],
};

//reducer 함수
function todos(state = initialState, action) {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        input: action.input,
      };
    case INSERT:
      return {
        ...state,
        todos: state.todos.concat(action.todo),
      };
    case TOGGLE:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, done: !todo.done } : todo
        ),
      };
    case REMOVE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    default:
      return state;
  }
}

export default todos;
