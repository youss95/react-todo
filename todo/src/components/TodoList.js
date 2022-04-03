import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({ todo, onRemove, onToggle }) => {
  return (
    <div className="TodoList">
      {todo.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default TodoList;
