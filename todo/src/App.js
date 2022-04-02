import logo from './logo.svg';
import './App.css';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import { useCallback, useRef, useState } from 'react';

const App = () => {
  const [todo, setTodo] = useState([
    { id: 1, text: 'basic', checked: true },
    { id: 2, text: 'style', checked: true },
    { id: 3, text: 'create', checked: false },
  ]);

  const nextId = useRef(4);
  const onInsert = useCallback(
    (text) => {
      const newTodo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodo(todo.concat(newTodo));
      nextId.current += 1;
    },
    [todo],
  );
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todo={todo} />
    </TodoTemplate>
  );
};

export default App;
