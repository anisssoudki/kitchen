import React from 'react';
import {
    BrowserRouter,
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


const App = () => {
    return (
<div>
   
    <BrowserRouter  history={history} >
    <Header/>
    <Switch>
   
    <Route path='/' exact component={RecipeList}/>
    <Route path='/recipe/:id' exact component={RecipeShow}/>
    <Route path='/recipe/edit/:id' exact component={RecipeEdit}/>
    <Route path='/recipe/delete/:id' exact component={RecipeDelete}/>
    <Route path='/recipe/new' exact component={RecipeCreate}/>
    </Switch>
        
    </BrowserRouter>
     
</div>
    ) 



    
}

export default App