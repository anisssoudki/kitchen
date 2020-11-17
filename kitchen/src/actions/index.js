import { SIGN_IN,
         SIGN_OUT,
         CREATE_USER,
         CREATE_RECIPE,
         FETCH_RECIPE, 
         FETCH_RECIPES, 
         DELETE_RECIPE,
         EDIT_RECIPE,
         GET_YUM
} from './types'
import users from '../apis/users'
import recipes from '../apis/recipes'
import history from '../history'
import Yummly from '../apis/Yummly'
export const signIn = (userInfo) => {
   console.log(userInfo) 
return {
   type: SIGN_IN,
   payload:  userInfo
};

};

export const signOut = () => {
return {
   type: SIGN_OUT
};
};

export const createUser = (params) => async dispatch => {
   console.log(params) 
   const response = await users.post('/users', params);
   console.log(response)  
   dispatch  ({ type: CREATE_USER, payload: response.data });
   history.push('/')
}

export const createRecipe = formValues => async (dispatch, getState) => {
   console.log(getState().auth.userInfoFromRails.id)
const user_id = getState().auth.userInfoFromRails.id

   const response = await recipes.post('/recipes', { ...formValues, user_id });

    dispatch({ type: CREATE_RECIPE, payload: response.data });
    //  do some navigation to return user to root route
   history.push('/')
};

export const fetchRecipes = () => async dispatch => {
    const response = await recipes.get('/recipes');
    // console.log(response)
    dispatch({ type: FETCH_RECIPES, payload: response.data });
  
};

export const fetchRecipe = (id) => async dispatch => {
    const response = await recipes.get(`/recipes/${id}`);
    dispatch({ type: FETCH_RECIPE, payload: response.data })
};

export const editRecipe = (id, formValues) => async (dispatch, getState) => {
    const user_id = getState().auth.userInfoFromRails.id
    const response = await recipes.patch(`/recipes/${id}`, { ...formValues, user_id })
    dispatch({ type: EDIT_RECIPE, payload: response.data })
    console.log(response.data)
    history.push('/')
};

export const deleteRecipe = (id) => async dispatch => {
    await recipes.delete(`/recipes/${id}`);
    dispatch({ type: DELETE_RECIPE, payload: id});
};

export const getYums = (formValues) => async (dispatch) => {

   const response = await Yummly.get("/search", {

       params: {
           q: (formValues.q) 
       }
   }) 
  
   dispatch ({ type: GET_YUM, payload: response.data})
   history.push('/yums')
   // console.log(response.data)
   
     
   };