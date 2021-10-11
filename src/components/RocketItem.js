import React from 'react';
import ReserveButton from './ReserveButton';

const Rocket = () => (
  <div>
    <div className="rocketImage" />
    <div className="rocketDetails">
      <h5 className="rocketName">Appollo</h5>
      <div className="rocketDesription">
        <p>Appollo is going to space</p>
        <ReserveButton />
      </div>
    </div>
  </div>
);

export default Rocket;
