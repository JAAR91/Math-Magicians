import React from 'react';
import ReactDOM from 'react-dom';

const Home = () => {
  ReactDOM.render(
    <div className="p-5 mt-5">
      <h1 className="mt-5">Welcome to our page!</h1>
      <p className="mt-3 fs-4">
        Loerem ipsum dolor sitamet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit it voluptate velot esse cillum dolore eu fugiat nilla pariatur. Excepteur
        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
        est laborum. Ipsu.
      </p>
      <p className="fs-4">
        Loerem ipsum dolor sitamet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit it voluptate velot esse cillum dolore eu fugiat nilla pariatur. Excepteur
        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
        est laborum. Ipsu.
      </p>
    </div>,
    document.getElementById('container'),
  );
};

export default Home;
