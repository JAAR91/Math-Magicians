import PropTypes from 'prop-types';

const Mission = (props) => {
  const { data } = props;
  const missionName = data.mission_name;
  const { description } = data;

  return (
    <tr>
      <td>
        {missionName}
      </td>
      <td>
        {description}
      </td>
      <td />
      <td />
    </tr>
  );
};

Mission.propTypes = {
  data: PropTypes.shape({
    mission_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Mission;
