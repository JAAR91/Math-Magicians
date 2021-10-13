import React from 'react';
import { reserveRockets, cancelRockets } from '../redux/rockets/rockets';

function ReserveButton(props) {
  return (
    <button type="button" onClick={props}>
      Reserve Rocket
    </button>
  );
}

function CancelButton(props) {
  return (
    <button type="button" onClick={props}>
      Cancel Reservation
    </button>
  );
}

const reserveClick = (rocketId) => {
  reserveRockets(rocketId);
};

const cancelClick = (rocketId) => {
  cancelRockets(rocketId);
};
const Button = (rocket) => {
  // <button type="button">Reserve Rocket</button>
  const { id, status } = rocket;
  let button;
  if (status) {
    button = <CancelButton onClick={cancelClick(id)} />;
  } else {
    button = <ReserveButton onClick={reserveClick(id)} />;
  }

  return (
    <div>
      {button}
    </div>
  );
};

export default Button;

// render() {
//   const reservedStatus = prop.status
//   let button;
//   if (reservedStatus) {
//     button = <CancelButton onClick={this.handleLogoutClick} />;
//   } else {
//     button = <ReserveButton onClick={this.handleLoginClick} />;
//   }

//   return (
//     <div>
//       {button}
//     </div>
//   );
// }
