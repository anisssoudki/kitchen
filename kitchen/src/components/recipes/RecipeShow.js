import React from 'react';
import { connect } from 'react-redux'
import { fetchRecipe } from '../../actions';
import { RecipeList } from './RecipeList'

class RecipeShow extends React.Component {

    componentDidMount(){

    //  console.log(this.props)
        
       this.props.fetchRecipe(this.props.match.params.id)
    
        // console.log(this.props.fetchRecipe(this.props.match.params.id))
    }

    renderRecipe() {

       
        return this.props.recipes.map(recipe => {
                
            if (this.props.match.params.id == recipe.id)
            return(
                <div className="item" key={recipe.id}>
                     
                    <i className="large middle aligned icon food red"/>
                    <div className="content">
                        <h1 className="ui header blue">{recipe.title}</h1>
                        <img src={recipe.image} alt={recipe.title} width="800" height="600"/>
                        <h3 className="description">{recipe.instructions}</h3>
                    </div>
                   
                </div>
            )
        })
    }
           
               
       
     
    
    
    render() {
        
        return (

            <div className="ui celled list">{this.renderRecipe()}</div>
        )   
    
}}

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        recipes: Object.values(state.recipes)
    }
    }

export default connect(mapStateToProps, { fetchRecipe })(RecipeShow);