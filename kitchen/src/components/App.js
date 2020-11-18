import React from 'react';
import {
 
    Router,
    Switch,
    Route
  } from "react-router-dom";
import RecipeList   from './recipes/RecipeList';
import RecipeShow   from './recipes/RecipeShow';
import RecipeEdit   from './recipes/RecipeEdit';
import RecipeDelete from './recipes/RecipeDelete';
import RecipeCreate from './recipes/RecipeCreate';
import Header from './Header';
import history from '../history'; 
import YummlyList from './yummlys/YummlyList';

const App = () => {
    return (
<div>
   
    <Router  history={history} >
    <Header/>
    <Switch>
   <Route path='/yums' exact component={YummlyList}/>
    <Route path='/' exact component={RecipeList}/>
    <Route path='/recipes/:id' exact component={RecipeShow}/>
    <Route path='/recipes/edit/:id' exact component={RecipeEdit}/>
    <Route path='/recipes/delete/:id' exact component={RecipeDelete}/>
    <Route path='/recipes/new' exact component={RecipeCreate}/>
    </Switch>
        
    </Router>
     
</div>
    ) 



    
}

export default App