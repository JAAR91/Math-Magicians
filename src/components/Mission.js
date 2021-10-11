import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { joinMissions, leaveMissions } from '../redux/missions/Missions';

const Mission = (props) => {
  const { data } = props;
  const missionName = data.mission_name;
  const id = data.mission_id;
  const { description, status } = data;
  const dispatch = useDispatch();

  const joinMissionsButton = () => {
    dispatch(joinMissions(id));
  };

  const leaveMissionButton = () => {
    dispatch(leaveMissions(id));
  };

  const pillClass = (status) => {
    if (status) {
      return 'badge rounded-pill bg-info';
    }
    return 'badge rounded-pill bg-secondary';
  };

  const memberButton = (status) => {
    if (status) {
      return (<button className="btn btn-outline-danger" type="button" onClick={leaveMissionButton}>Leave Mission</button>);
    }
    return (<button className="btn btn-outline-dark" type="button" onClick={joinMissionsButton}>Join Mission</button>);
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
    mission_id: PropTypes.string.isRequired,
    mission_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Mission;
