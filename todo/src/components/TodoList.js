import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({ todo }) => {
  return (
    <div className="TodoList">
      {todo.map((todo) => (
        <TodoListItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
