/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import ReserveButton from './ReserveButton';

const Rocket = (props) => {
  // const { rocket_name } = prop;
  const { data } = props;
  const rocketName = data.rocket_name;
  const { description } = data;
  const { flickr_images: imageUrl } = data;

  return (
    <div>
      <div className="rocketImage">
        <img src={imageUrl[0]} alt={rocketName} />
      </div>
      <div className="rocketDetails">
        <h5 className="rocketName">{rocketName}</h5>
        <div className="rocketDesription">
          <p>{description}</p>
          <ReserveButton />
        </div>
      </div>
    </div>
  );
};

Rocket.propTypes = {
  // flickr_images: PropTypes.array,
  data: PropTypes.shape({
    rocket_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    flickr_images: PropTypes.instanceOf(Array),
  }).isRequired,
};

export default Rocket;
