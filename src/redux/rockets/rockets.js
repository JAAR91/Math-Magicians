const LOAD_ROCKETS = 'SPACE_TRAVELERS/ROCKETS/LOAD_ROCKETS';

const initialState = [];

export const loadRockets = (payload) => ({
  type: LOAD_ROCKETS,
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
  if (action.type === LOAD_ROCKETS) {
    return action.payload;
  }
  return state;
};

export default reducer;
