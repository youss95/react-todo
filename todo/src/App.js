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

  const onRemove = useCallback(
    (id) => {
      setTodo(todo.filter((todo) => todo.id !== id));
    },
    [todo],
  );
  const onToggle = useCallback(
    (id) => {
      setTodo(
        todo.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [todo],
  );
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
      <TodoList todo={todo} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
