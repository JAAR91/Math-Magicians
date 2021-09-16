import { Component } from 'react';
import PropTypes from 'prop-types';

export const CalcDisplay = (props) => {
  let ans = <span className="CalcDisplay col-12 fs-1 bg-secondary text-white m-0 text-end rounded-top py-4">{props.total}</span>;
  if (props.total === null || (props.next && props.operation)) {
    ans = <span className="CalcDisplay col-12 fs-1 bg-secondary text-white m-0 text-end rounded-top py-4">{props.next}</span>;
  }
  return ans;
};

class CalcButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const { cFunction } = this.props;
    cFunction(e.target.textContent);
  }

  render() {
    const { text, Bclass } = this.props;
    let ans = <button className="col-3 p-5 bg-orange" type="button" onClick={this.handleClick}>{text}</button>;
    if (Bclass === 'true') {
      ans = <button className="col-3 p-5 bg-white" type="button" onClick={this.handleClick}>{text}</button>;
    }
    if (text === '0') {
      ans = <button className="col-6 p-5 bg-white" type="button" onClick={this.handleClick}>{text}</button>;
    }

    return ans;
  }
}

CalcButton.propTypes = {
  text: PropTypes.string.isRequired,
  Bclass: PropTypes.string.isRequired,
  cFunction: PropTypes.func.isRequired,
};

export default CalcButton;
