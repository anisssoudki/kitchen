import React from 'react';
import { connect } from 'react-redux'
// import history from '../../history'
import { fetchRecipe, deleteRecipe } from '../../actions'
import { Link } from 'react-router-dom'
class RecipeDelete extends React.Component  {
 
    componentDidMount() {

        console.log(this.props)
    this.props.fetchRecipe(this.props.match.params.id)

}

render() 

{
    // console.log(this.props.recipe.id)
        return (
            <div>
                <h1>
                {this.props.recipe.title} 
                </h1>
             
                <div>
                Are you sure you want to delete?
                </div>
                <Link to ="/">
            <button onClick={() => this.props.deleteRecipe(this.props.recipe.id)} 
           
            className="ui button negative">
            Delete Recipe
            </button>
            <Link to ="/" className="ui button primary">Cancel</Link>
            </Link>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
return { recipe: state.recipes[ownProps.match.params.id] }
};

export default connect(mapStateToProps, {fetchRecipe, deleteRecipe}) (RecipeDelete);