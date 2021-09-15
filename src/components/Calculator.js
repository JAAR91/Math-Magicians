const CalcButton = (props) => {
  let ans = <button className="col-3 p-5 bg-orange" type="button">{props.text}</button>;
  if (props.Bclass === 'true') {
    ans = <button className="col-3 p-5 bg-white" type="button">{props.text}</button>;
  }
  if (props.text === '0') {
    ans = <button className="col-6 p-5 bg-white" type="button">{props.text}</button>;
  }

  return ans;
};

export const CalcDisplay = (props) => {
  const ans = <span className="col-12 fs-1 bg-secondary text-white m-0 text-end rounded-top py-4" value="0">{props.data}</span>;
  return ans;
};

export default CalcButton;
