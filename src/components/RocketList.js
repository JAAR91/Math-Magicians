/* eslint-disable react/destructuring-assignment */
import React from 'react';
import RocketItem from './RocketItem';

const RocketList = (rockets) => (
  <ul className="allRockets">
    {rockets.forEach((rocket) => {
      const { id } = rocket;
        <RocketItem key={id} rocket={rocket} />;
    })}
  </ul>
);

export default RocketList;
