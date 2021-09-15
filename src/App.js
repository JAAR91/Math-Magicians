import React from 'react';
import ReactDOM from 'react-dom';
import CalcButton, { CalcDisplay } from './components/Calculator';

class Calculator extends React.Component {
  render() {
    const value = (
      <div className="Calculator row p-0 shadow fs-2 mx-auto mt-3 rounded-3">
        <CalcDisplay data={0} />
        <CalcButton text="AC" Bclass="true" />
        <CalcButton text="+/-" Bclass="true" />
        <CalcButton text="%" Bclass="true" />
        <CalcButton text="÷" Bclass="false" />
        <CalcButton text="9" Bclass="true" />
        <CalcButton text="8" Bclass="true" />
        <CalcButton text="9" Bclass="true" />
        <CalcButton text="x" Bclass="false" />
        <CalcButton text="4" Bclass="true" />
        <CalcButton text="5" Bclass="true" />
        <CalcButton text="6" Bclass="true" />
        <CalcButton text="-" Bclass="false" />
        <CalcButton text="1" Bclass="true" />
        <CalcButton text="2" Bclass="true" />
        <CalcButton text="3" Bclass="true" />
        <CalcButton text="+" Bclass="false" />
        <CalcButton text="0" Bclass="true" />
        <CalcButton text="." Bclass="true" />
        <CalcButton text="=" Bclass="false" />
      </div>
    );
    return value;
  }
}

function App() {
  ReactDOM.render(<Calculator />,
    document.getElementById('container'));
}

export default App;
