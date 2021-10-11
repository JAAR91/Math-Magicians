import { React, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { loadMissionsData } from '../redux/missions/Missions';
import Mission from './Mission';

const MissionsLists = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  const loadMissionsAction = bindActionCreators(loadMissionsData, dispatch);

  useEffect(() => {
    loadMissionsAction();
    return null;
  }, []);

  return (
    <table className="container">
      <tr>
        <td>
          Mission
        </td>
        <td>
          Description
        </td>
        <td>
          Status
        </td>
        <td />
      </tr>
      {missions.map((mission) => (
        <Mission key={missions.id} data={mission} />
      ))}
    </table>
  );
};

export default MissionsLists;
