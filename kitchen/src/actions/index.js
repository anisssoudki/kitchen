import { SIGN_IN,
    SIGN_OUT
} from './types'

export const signIn = (user_id, user_name) => {

return {
   type: SIGN_IN,
   payload:  {googleuserid: user_id, username: user_name}
};

};

export const signOut = () => {
return {
   type: SIGN_OUT
};
};