import { userConstants } from '../../Constants/index';
import { userService } from '../../Service/index';


export const userActions = {
    login,

};

function login(user) {
    return dispatch => {
        dispatch(request(user));

        userService.login(user)
            .then(
              user =>  {     
                dispatch(success(user));
                },
                error => {
                    dispatch(failure(error));
                    
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

