import {SIGN_IN, SIGN_OUT} from '../actions/types'
const INITIAL_STATE = {
    isSignedIn: null,
    user_id: null,
    user_name: null
};

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case SIGN_IN:
            return {...state, isSignedIn: true, user_id: action.payload.googleuserid, user_name: action.payload.username };
         
            
            case SIGN_OUT:
                return {...state, isSignedIn: false, user_id: null, user_name: null}; 

                default:
                    return state;

    }
};
