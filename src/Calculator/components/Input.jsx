import React from "react";
import { TfiMoney } from "react-icons/tfi";

const InputNum = ({ label, value, onChange }) => {
  const handleChange = (e) => {
    let inputValue = e.target.value;
    inputValue = inputValue.replace(/[^0-9]/g, "");
    const numericValue = Math.abs(Number(inputValue));
    const formattedValue = new Intl.NumberFormat().format(numericValue);
    onChange(formattedValue);
  };
  return (
      <div className="select-container">
          <label className="select-label">{label}</label>
      <div className="select-header">
        <TfiMoney className="select-icon" />
        <input
          type="text"
          value={value}
          onChange={handleChange}
          className="input-field"
          placeholder="0"
        />
      </div>
    </div>
  );
};

export default InputNum;
