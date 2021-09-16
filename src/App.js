import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import CalcButton, { CalcDisplay } from './components/Calculator';
import calculate from './logic/calculate';

const Calculator = () => {
  const [calcObject, setDisplay] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const updateCalc = (value) => {
    setDisplay(calculate(calcObject, value));
  };

  const value = (
    <div className="Calculator row p-0 shadow fs-2 mx-auto mt-3 rounded-3">
      <CalcDisplay calcObject={calcObject} />
      <CalcButton text="AC" Bclass="true" cFunction={updateCalc} />
      <CalcButton text="+/-" Bclass="true" cFunction={updateCalc} />
      <CalcButton text="%" Bclass="true" cFunction={updateCalc} />
      <CalcButton text="÷" Bclass="false" cFunction={updateCalc} />
      <CalcButton text="9" Bclass="true" cFunction={updateCalc} />
      <CalcButton text="8" Bclass="true" cFunction={updateCalc} />
      <CalcButton text="9" Bclass="true" cFunction={updateCalc} />
      <CalcButton text="x" Bclass="false" cFunction={updateCalc} />
      <CalcButton text="4" Bclass="true" cFunction={updateCalc} />
      <CalcButton text="5" Bclass="true" cFunction={updateCalc} />
      <CalcButton text="6" Bclass="true" cFunction={updateCalc} />
      <CalcButton text="-" Bclass="false" cFunction={updateCalc} />
      <CalcButton text="1" Bclass="true" cFunction={updateCalc} />
      <CalcButton text="2" Bclass="true" cFunction={updateCalc} />
      <CalcButton text="3" Bclass="true" cFunction={updateCalc} />
      <CalcButton text="+" Bclass="false" cFunction={updateCalc} />
      <CalcButton text="0" Bclass="true" cFunction={updateCalc} />
      <CalcButton text="." Bclass="true" cFunction={updateCalc} />
      <CalcButton text="=" Bclass="false" cFunction={updateCalc} />
    </div>
  );
  return value;
};

function App() {
  ReactDOM.render(<Calculator />,
    document.getElementById('container'));
}

export default App;
