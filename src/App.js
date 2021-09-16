import React from 'react';
import ReactDOM from 'react-dom';
import CalcButton, { CalcDisplay } from './components/Calculator';
import calculate from './logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
  }

  handleClick(newText) {
    const ans = calculate(this.state, newText);
    this.setState(ans);
  }

  render() {
    const { next, total, operation } = this.state;
    const value = (
      <div className="Calculator row p-0 shadow fs-2 mx-auto mt-3 rounded-3">
        <CalcDisplay total={total} next={next} operation={operation} />
        <CalcButton text="AC" Bclass="true" cFunction={this.handleClick} />
        <CalcButton text="+/-" Bclass="true" cFunction={this.handleClick} />
        <CalcButton text="%" Bclass="true" cFunction={this.handleClick} />
        <CalcButton text="÷" Bclass="false" cFunction={this.handleClick} />
        <CalcButton text="9" Bclass="true" cFunction={this.handleClick} />
        <CalcButton text="8" Bclass="true" cFunction={this.handleClick} />
        <CalcButton text="9" Bclass="true" cFunction={this.handleClick} />
        <CalcButton text="x" Bclass="false" cFunction={this.handleClick} />
        <CalcButton text="4" Bclass="true" cFunction={this.handleClick} />
        <CalcButton text="5" Bclass="true" cFunction={this.handleClick} />
        <CalcButton text="6" Bclass="true" cFunction={this.handleClick} />
        <CalcButton text="-" Bclass="false" cFunction={this.handleClick} />
        <CalcButton text="1" Bclass="true" cFunction={this.handleClick} />
        <CalcButton text="2" Bclass="true" cFunction={this.handleClick} />
        <CalcButton text="3" Bclass="true" cFunction={this.handleClick} />
        <CalcButton text="+" Bclass="false" cFunction={this.handleClick} />
        <CalcButton text="0" Bclass="true" cFunction={this.handleClick} />
        <CalcButton text="." Bclass="true" cFunction={this.handleClick} />
        <CalcButton text="=" Bclass="false" cFunction={this.handleClick} />
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
