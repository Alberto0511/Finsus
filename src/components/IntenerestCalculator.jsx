
import React, { useState } from 'react';
import Dropdown from './Select';
import { interestOptions, timeOptions } from './constants'; 
import '../App.css';

const InterestCalculator = () => {
  const [selectedInterest, setSelectedInterest] = useState(null); 
  const [selectedTime, setSelectedTime] = useState(null); 

  return (
    <div>
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
    </div>
  );
};

export default InterestCalculator;
