import React from "react";
import IntenerestCalculator from "./Calculator/components/InvestorCalculator";
import Table from "./Calculator/components/Table";
import ChartContainer from "./Calculator/components/ChartContainer";
import "./App.css";
function App() {
  return (
    <>
      <IntenerestCalculator />
      <ChartContainer />
      <Table />
    </>
  );
}

export default App;
