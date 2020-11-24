import React from 'react';
import { connect } from 'react-redux'
import { fetchRecipes} from '../../actions';
import { Link } from 'react-router-dom'


class RecipeList extends React.Component {

componentDidMount(){
 
    
    this.props.fetchRecipes();
   
}


renderAdmin(recipe) {

    if(recipe.user_id === this.props.CurrentUserId) {
        return (
            <div className="right floated content">
<Link to={`/recipes/edit/${recipe.id}`} className="ui button primary">
    edit
</Link>
<Link to={`/recipes/delete/${recipe.id}`} className="ui button negative">
    delete
</Link>

            </div>
        )
    }
}


      
renderList() {
    
    return this.props.recipes.map(recipe => {
        return(
            <div className="item" key={recipe.id}>
                 {this.renderAdmin(recipe)}
                <i className="large middle aligned icon food"/>
                <div className="content">
                    <Link to={`/recipes/${recipe.id}`} className="header">{recipe.title}</Link>
                    <div className="description">{recipe.instructions}</div>
                    <img src={recipe.image} alt={recipe.title} width="150" height="75"/>
                </div>
               
            </div>
        )
    })
}


renderCreate() {
    if (this.props.isSignedIn){
        return (

            <div>
               <Link to="/recipe/new" className="ui button primary"> 
                     Create Recipe
                </Link>

            </div>
        )
    }
}




    render() {
     
        return (
        
        <div> 
        <h2>recipes</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
        </div>
        
        )
    }
}

const mapStateToProps = (state) => {
return {
    recipes: Object.values(state.recipes),
    CurrentUserId: state.auth.userInfoFromRails.id,
    isSignedIn: state.auth.isSignedIn
}
}

export default connect(mapStateToProps, { fetchRecipes })(RecipeList);