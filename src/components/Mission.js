import PropTypes from 'prop-types';

const Mission = (props) => {
  const { data } = props;
  const missionName = data.mission_name;
  const { description, status } = data;

  const pillClass = (status) => {
    if (status) {
      return 'badge rounded-pill bg-info';
    }
    return 'badge rounded-pill bg-secondary';
  };

  const memberButton = (status) => {
    if (status) {
      return (<button className="btn btn-outline-danger" type="button">Leave Mission</button>);
    }
    return (<button className="btn btn-outline-dark" type="button">Join Mission</button>);
  };

  const StatusChecker = () => {
    if (status) {
      return 'ACTIVE MEMBER';
    }
    return 'NOT A MEMBER';
  };

  return (
    <tr>
      <td>
        <p className="fs-6 fw-bold">{missionName}</p>
      </td>
      <td>
        {description}
      </td>
      <td>
        <span className={pillClass(status)}>{StatusChecker()}</span>
      </td>
      <td>
        {memberButton(status)}
      </td>
    </tr>
  );
};

Mission.propTypes = {
  data: PropTypes.shape({
    mission_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Mission;
