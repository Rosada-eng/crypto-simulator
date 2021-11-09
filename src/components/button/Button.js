import React from 'react';
import './Button.css';
const Button = ({ onClick, name }) => {
  return (
    <button className={name} onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
