import axios from 'axios';
// import { combineReducers } from 'redux';

const initialState = { candies: [] };

const SET_CANDIES = 'SET_CANDIES';

export const setCandiesActionCreator = candies => ({
  type: SET_CANDIES,
  candies,
});

const reducer = (prevState = initialState, action) => {
  const newState = JSON.parse(JSON.stringify(prevState));
  switch (action.type) {
    case SET_CANDIES:
      newState.candies = action.candies;
      return newState;
    default:
      return prevState;
  }
};

// export const candiesReducer = (prevState = [], action) => {
//   switch (action.type) {
//     case SET_CANDIES:
//       const newState = [...action.candies];
//       return newState;
//     default:
//       return prevState;
//   }
// };

// export const rootReducer = (prevState = initialState, action) => {
//   const newState = JSON.parse(JSON.stringify(prevState));
//   switch (action.type) {
//     default:
//       return prevState;
//   }
// };

export const getCandiesThunkCreator = () => {
  return async dispatch => {
    try {
      const { data } = await axios.get('/api/candies');
      console.log(data);
      dispatch(setCandiesActionCreator(data));
    } catch (error) {
      console.error(error);
    }
  };
};

// export function getCandiesThunkCreator() {
//   // Add your thunk creator here.
//   return function(dispatch) {
//     return axios
//       .get('/api/candies')
//       .then(
//         candies => dispatch(setCandiesActionCreator(candies.data)),
//         error => dispatch(createBalloonsErrorAction(error))
//       );
//   };
// }

// const combinedReducers = combineReducers({
//   root: rootReducer,
//   candies: candiesReducer,
// });

// export default combinedReducers;

export default reducer;
