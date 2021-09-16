import React from 'react';
import ReactDOM from 'react-dom';

const Quote = () => {
  ReactDOM.render(
    <div className="p-3 mt-5 fs-3">
      <p className="mt-5">
        Mathematics is not about numbers, equations, computations, or algorithms:
        it is about understanding. -William Paul Thurston
      </p>
    </div>,
    document.getElementById('container'),
  );
};

export default Quote;
