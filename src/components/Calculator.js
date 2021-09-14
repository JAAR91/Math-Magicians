import React from 'react';

function CalcButton(props) {
  let ans = <button className="col-3 p-5 bg-orange" type="button">{props.text}</button>;
  if (props.Bclass === 'true') {
    ans = <button className="col-3 p-5 bg-white" type="button">{props.text}</button>;
  }
  if (props.text === '0') {
    ans = <button className="col-6 p-5 bg-white" type="button">{props.text}</button>;
  }

  return ans;
}

class Calculator extends React.Component {
  render() {
    const value = (
      <div className="Calculator row p-0 shadow fs-2 mx-auto mt-3 rounded-3">
        <span className="col-12 fs-1 bg-secondary text-white m-0 text-end rounded-top py-4" value="0">0</span>
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
        <CalcButton text="=" Bclass="true" />
      </div>
    );
    return value;
  }
}

export default Calculator;
