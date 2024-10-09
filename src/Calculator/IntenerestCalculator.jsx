import React, { useState } from 'react';
import Dropdown from './components/Select';
import InputNum from './components/Input';
import Table from './components/Table';
import { interestOptions, timeOptions } from './models/constants';
import '../App.css';
import ChartContainer from './components/ChartContainer';

const InterestCalculator = () => {
  const [selectedInterest, setSelectedInterest] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [amount, setAmount] = useState('');
  return (
    <div>
      <h2 className="subtitle">
        Descubre cómo el interés compuesto hace su magia*
      </h2>
      <InputNum
        label="Ingresa con cuánto dinero podrías hacer tu primera inversión:"
        value={amount}
        onChange={setAmount}
      />
      <Dropdown
        label="Selecciona el tiempo que estará invertido tu dinero:"
        options={interestOptions}
        selectedOption={selectedInterest}
        onOptionSelect={setSelectedInterest}
      />
      <Dropdown
        label="Selecciona el tipo de plazo:"
        options={timeOptions}
        selectedOption={selectedTime}
        onOptionSelect={setSelectedTime}
      />
      <InputNum
        label="¿Cuánto le vas a depositar al mes?"
        value={amount}
        onChange={setAmount}
      />
      <ChartContainer />
      <Table />
    </div>
  );
};

export default InterestCalculator;
