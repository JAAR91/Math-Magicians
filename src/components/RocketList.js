/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
import { React, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import Rocket from './RocketItem';
import { loadRocketsData } from '../redux/rockets/rockets';

const RocketList = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  const loadRocketsAction = bindActionCreators(loadRocketsData, dispatch);

  useEffect(() => {
    loadRocketsAction();
    return null;
  }, []);

  return (
    <ul className="allRockets">
      {/* {rockets.forEach((rocket) => {
        const { id } = rocket;
        console.log(rocket.rocket_name);
          <li>
            <Rocket key={id} rocket={rocket} />
          </li>;
      })} */}
      {rockets.map((rocket) => (
        <Rocket key={rocket.id} data={rocket} />
      ))}
    </ul>
  );
};

export default RocketList;
