import logo from './logo.svg';
import './App.css';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import { useCallback, useReducer, useRef, useState } from 'react';

function createBulk() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return array;
}

function todoReducer(todo, action) {
  switch (action.type) {
    case 'INSERT':
      return todo.concat(action.todo);
    case 'REMOVE':
      return todo.filter((todo) => todo.id !== action.id);
    case 'TOGGLE':
      return todo.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
      );
    default:
      return todo;
  }
}
const App = () => {
  // const [todo, setTodo] = useState([
  //   { id: 1, text: 'basic', checked: true },
  //   { id: 2, text: 'style', checked: true },
  //   { id: 3, text: 'create', checked: false },
  // ]);
  //const [todo, setTodo] = useState(createBulk); //함수가 아니라 파라미터를 넣어준거
  const [todo, dispatch] = useReducer(todoReducer, undefined, createBulk);
  const onRemove = useCallback((id) => {
    dispatch({ type: 'REMOVE', id });
  }, []);

  const onToggle = useCallback((id) => {
    dispatch({ type: 'TOGGLE', id });
  }, []);
  const nextId = useRef(2501);
  const onInsert = useCallback((text) => {
    const newTodo = {
      id: nextId.current,
      text,
      checked: false,
    };
    dispatch({ type: 'INSERT', todo });
    nextId.current += 1;
  }, []);
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todo={todo} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
