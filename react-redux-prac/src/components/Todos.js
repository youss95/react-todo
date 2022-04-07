const TodoItem = ({ todo, onToggle, onRemove }) => {
  return (
    <div>
      <input
        type="checkbox"
        onClick={() => onToggle(todo.id)}
        checked={todo.done}
      />
      <span>{todo.text}</span>
      <button onClick={() => onRemove(todo.id)}>delete</button>
    </div>
  );
};

const Todos = ({ input, todos, changeInput, onInsert, onToggle, onRemove }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    onInsert(input);
    changeInput("");
  };
  const onChange = (e) => changeInput(e.target.value);
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={input} onChange={onChange} />
        <button type="submit">등록</button>
      </form>
      <div>
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            onToggle={onToggle}
            onRemove={onRemove}
          />
        ))}
      </div>
    </div>
  );
};

export default Todos;
