const LOAD_ROCKETS = 'SPACE_TRAVELERS/ROCKETS/LOAD_ROCKETS';
const RESERVE_ROCKET = 'SPACE_TRAVELERS/ROCKETS/RESERVE_ROCKETS';
const CANCEL_ROCKET = 'SPACE_TRAVELERS/ROCKETS/CANCEL_ROCKETS';

const initialState = [];

export const loadRockets = (payload) => ({
  type: LOAD_ROCKETS,
  payload,
});

export const reserveRockets = (payload) => ({
  type: RESERVE_ROCKET,
  payload,
});

export const cancelRockets = (payload) => ({
  type: CANCEL_ROCKET,
  payload,
});

export const loadRocketsData = () => async (dispatch) => {
  const res = await fetch('https://api.spacexdata.com/v3/rockets');
  const data = await res.json();
  // eslint-disable-next-line
  console.log(data);
  dispatch(loadRockets(data));
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ROCKETS:
      return action.payload;
    case RESERVE_ROCKET:
      return state.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: true };
      });
    default: return state;
  }
};
export default reducer;
