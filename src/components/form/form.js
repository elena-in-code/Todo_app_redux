import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../store/actions';
import './form.css';

const Form = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState('');
  const hasInputValue = inputValue.length > 0;

  return (
    <div className="form__wrapper">
      <input
        className="form__input"
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
        type="text"
        value={inputValue}
      />
      <button
        className="form__button"
        onClick={
          hasInputValue
            ? () => {
                addTodo(inputValue);
                setInputValue('');
              }
            : () => {}
        }
      >
        Add
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addTodo: (inputValue) => {
    dispatch(addTodo(inputValue));
  },
});

export default connect(null, mapDispatchToProps)(Form);
