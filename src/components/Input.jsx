import React from 'react'

const Input = ({ label, type = "text", placeholder }) => {
  return (
    <div className="inputBox">
      <label>{label}</label>
      <input type={type} placeholder={placeholder} />
    </div>
  );
};

export default Input;
