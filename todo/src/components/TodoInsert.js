import { useCallback, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');
  const [test, setTest] = useState(0);
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onInsert(value);
      setValue('');
    },
    [onInsert, value],
  );
  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      {' '}
      {/* submit될때  */}
      <input value={value} onChange={onChange} placeholder="할 일 입력"></input>
      <button type="submit">
        <MdAdd /> {test}
      </button>
    </form>
  );
};

export default TodoInsert;
