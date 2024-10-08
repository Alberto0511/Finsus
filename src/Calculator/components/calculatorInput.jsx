import React, { useState } from 'react';
import '../../App.css';

export default function CalculatorInput() {
  const [amount, setAmount] = useState(0);

  const handleInputChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    setAmount(value);
  };
  return (
    <div className="calculator-container">
      <p className="instruction-text">
        Ingresa con cuánto dinero podrías hacer tu primera inversión:
      </p>
      <div className="input-wrapper">
        <span className="currency">$</span>
        <input
          type="text"
          value={amount}
          onChange={handleInputChange}
          className="input-field"
          placeholder="0.00"
        />
      </div>
    </div>
  );
}
