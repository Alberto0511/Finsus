import React, { useState } from 'react';
import Dropdown from './components/Select';
import InputNum from './components/Input';
import Table from './components/Table';
import Cards from './components/Cards';
import ChartContainer from './components/ChartContainer';
import { interestOptions, timeOptions } from './models/constants';
import '../App.css';

const InterestCalculator = () => {
  const [selectedInterest, setSelectedInterest] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [amount, setAmount] = useState('');
  return (
    <div>
      <h2 className="subtitle">
        Descubre cómo el interés compuesto hace su magia*
      </h2>
      <div className="interest">
        <div>
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
        </div>
        <Cards />
      </div>
      <ChartContainer />
      <Table />
    </div>
  );
};

export default InterestCalculator;
