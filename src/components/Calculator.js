import PropTypes from 'prop-types';

export const CalcDisplay = (props) => {
  const { total, next, operation } = props.calcObject;
  let ans = <span className="CalcDisplay col-12 fs-1 bg-secondary text-white m-0 text-end rounded-top py-4">{total}</span>;
  if (total === null || (next && operation)) {
    ans = <span className="CalcDisplay col-12 fs-1 bg-secondary text-white m-0 text-end rounded-top py-4">{next}</span>;
  }
  return ans;
};

const CalcButton = (props) => {
  const { text, Bclass, cFunction } = props;

  const buttonClick = () => {
    cFunction(text);
  };

  let ans = <button className="col-3 p-5 bg-orange" type="button" onClick={buttonClick}>{text}</button>;
  if (Bclass === 'true') {
    ans = <button className="col-3 p-5 bg-white" type="button" onClick={buttonClick}>{text}</button>;
  }
  if (text === '0') {
    ans = <button className="col-6 p-5 bg-white" type="button" onClick={buttonClick}>{text}</button>;
  }

  return ans;
};

CalcButton.propTypes = {
  text: PropTypes.string.isRequired,
  Bclass: PropTypes.string.isRequired,
  cFunction: PropTypes.func.isRequired,
};

export default CalcButton;
