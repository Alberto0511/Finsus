import React from 'react';

import InvestorCalculator from './Calculator/components/InvestorCalculator';
import Table from './Calculator/components/Table'
import "./App.css";
import ChartContainer from './Calculator/components/ChartContainer';


function App() {
  return (
    <>
     
      <InvestorCalculator />
      <ChartContainer/>
     
    </>

  );
}

export default App;