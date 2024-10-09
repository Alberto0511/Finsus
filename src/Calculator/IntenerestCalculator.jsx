import React from 'react';
import CalculatorInput from './components/calculatorInput';
import TablaFinsus from './components/TablaFinsus';

import '../App.css';

export default function IntenerestCalculator() {
  return (
    <div className="main-conatiner">
      <h2 className="subtitle">
        Descubre cómo el interés compuesto hace su magia*
      </h2>
      <CalculatorInput />
      <TablaFinsus />
    </div>
  );
}
