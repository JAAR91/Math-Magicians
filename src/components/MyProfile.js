import React from 'react';
import JoinedMissionsList from './JoinenMissions';
import ReservedRockets from './ReservedRockets';

const MyProfile = () => (
  <div className="container">
    <JoinedMissionsList />
    <ReservedRockets />
  </div>
);

export default MyProfile;
