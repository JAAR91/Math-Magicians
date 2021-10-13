/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import Button from './ReserveButton';

const Rocket = (props) => {
  // const { rocket_name } = prop;
  const { data } = props;
  const rocketName = data.rocket_name;
  const { description } = data;
  const { flickr_images: imageUrl } = data;

  return (
    <div className="row p-3">
      <div className="col-sm-4 col-md-3">
        <img src={imageUrl[0]} alt={rocketName} className="rocket_image" style={{ width: '100%' }} />
      </div>
      <div className="col-sm-8 col-md-9">
        <div className="rocketDetails">
          <h5 className="rocketName">{rocketName}</h5>
          <div className="rocketDesription">
            <p>{description}</p>
            <Button data={data} />
          </div>
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
