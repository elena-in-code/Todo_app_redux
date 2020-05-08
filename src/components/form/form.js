import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../store/actions';

const Form = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div>
      <input
        onChange={(event) => setInputValue(event.target.value)}
        type="text"
        value={inputValue}
      />
      <button onClick={() => addTodo(inputValue)}>Add</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addTodo: (inputValue) => {
    dispatch(addTodo(inputValue));
  },
});

export default connect(null, mapDispatchToProps)(Form);
