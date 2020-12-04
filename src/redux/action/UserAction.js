import axios from 'axios'
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE
} from './types'
export const fetchUsers = (param) => {
  return new Promise(dispatch => {
    dispatch(fetchUsersRequest())
    let baseUrl = "https://reqres.in/api/login";
    axios
      .post(baseUrl, param)
      .then(function (response) {
      //  console.log(response);
        dispatch(fetchUsersSuccess(response.data))
        //dispatchAction(deleteStateData(response.data));
      //  resolve(response);
      })
      .catch(function (error) {
        //reject(error);
        dispatch(fetchUsersFailure())
      });
  });
};
// export const fetchUsers = (param) => {
//   console.log(param,'ddddd');
//   return new Promise (dispatch => {
//     dispatch(fetchUsersRequest())
//     axios
//       .post('https://reqres.in/api/login',param)
//       .then(response => {
//         console.log(response),
//         // response.data is the users
//         dispatch(fetchUsersSuccess(response.data))
//       })
//       .catch(error => {
//         console.log(error);
//         // error.message is the error message
//         dispatch(fetchUsersFailure(error.message))
//       })
//   }
//   )}

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST
  }
}

export const fetchUsersSuccess = users => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  }
}

export const fetchUsersFailure = error => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  }
}