import axios from 'axios';
import { combineReducers } from 'redux';

export const initialState = { candies: [] };

export const SET_CANDIES = 'SET_CANDIES';

export const setCandiesActionCreator = candies => ({
  type: SET_CANDIES,
  candies,
});

export const candiesReducer = (prevState = [], action) => {
  switch (action.type) {
    case SET_CANDIES:
      const newState = [...action.candies];
      return newState;
    default:
      return prevState;
  }
};

export const rootReducer = (prevState = initialState, action) => {
  const newState = JSON.parse(JSON.stringify(prevState));
  switch (action.type) {
    default:
      return prevState;
  }
};

export const getCandiesThunkCreator = () => {
  return async dispatch => {
    try {
      const { data } = await axios.get('/api/candies');
      dispatch(setCandiesActionCreator(data));
    } catch (error) {
      console.error(error);
    }
  };
};

const combinedReducers = combineReducers({
  root: rootReducer,
  candies: candiesReducer,
});

export default combinedReducers;
