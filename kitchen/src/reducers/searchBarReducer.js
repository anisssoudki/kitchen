import { GET_YUM}  from '../actions/types'
// import _ from 'lodash';




export default  (state = {}, action) => {
    switch (action.type) {
        case GET_YUM:
            return {...state,  q: action.payload };

          default:
           return state;
         
              
            }
        };
        