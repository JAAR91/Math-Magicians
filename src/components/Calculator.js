import React from 'react';

class Calculator extends React.Component {
  constructor() {
    super();
    this.display = 0;
  }

  render() {
    const value = (
      <div className="Calculator row p-0 shadow fs-2 mx-auto mt-3 rounded-3">
        <p className="col-12 fs-1 bg-secondary text-white m-0 text-end rounded-top" value="0">0</p>
        <button className="col-3 p-5 bg-white" type="button">AC</button>
        <button className="col-3 p-5 bg-white" type="button">+/-</button>
        <button className="col-3 p-5 bg-white" type="button">%</button>
        <button className="col-3 p-5 bg-orange" type="button">÷</button>
        <button className="col-3 p-5 bg-white" type="button">7</button>
        <button className="col-3 p-5 bg-white" type="button">8</button>
        <button className="col-3 p-5 bg-white" type="button">9</button>
        <button className="col-3 p-5 bg-orange" type="button">x</button>
        <button className="col-3 p-5 bg-white" type="button">4</button>
        <button className="col-3 p-5 bg-white" type="button">5</button>
        <button className="col-3 p-5 bg-white" type="button">6</button>
        <button className="col-3 p-5 bg-orange" type="button">-</button>
        <button className="col-3 p-5 bg-white" type="button">1</button>
        <button className="col-3 p-5 bg-white" type="button">2</button>
        <button className="col-3 p-5 bg-white" type="button">3</button>
        <button className="col-3 p-5 bg-orange" type="button">+</button>
        <button className="col-6 p-5 bg-white" type="button">0</button>
        <button className="col-3 p-5 bg-white" type="button">.</button>
        <button className="col-3 p-5 bg-orange" type="button">=</button>
      </div>
    );
    return value;
  }
}

export default Calculator;
