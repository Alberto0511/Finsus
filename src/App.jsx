import React from 'react';
import IntenerestCalculator from './Calculator/components/InvestorCalculator';
import Table from './Calculator/components/Table';
import ChartContainer from './Calculator/components/ChartContainer';
import './App.css';
// import './Prueba.css';
// import Prueba from './Calculator/components/Prueba'
function App() {
  return (
    <>
      <IntenerestCalculator />
      <ChartContainer />
      <Table />
      {/* <Prueba/> */}
    </>

  );
}

export default App;