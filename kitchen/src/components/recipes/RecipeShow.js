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
     
const { recipe } = this.props

if (this.props.recipe === undefined) 

return(<div>loading...</div>)
      else  return (
           
                <div className="item" key={recipe.id}>
                 
                <i className="large middle aligned icon food"/>
                <div className="content">
                    <h1  className=" ui header red">{recipe.title}</h1>
                  
                    <img src={recipe.image} alt={recipe.title} width="800" height="600"/>
                    <div>
                    <h3 className="description">{recipe.instructions}</h3>
                          <h2><a href={recipe.refrences} target={"_blank"}> {recipe.refrences}</a> </h2>
                    </div>
                </div>
               
            </div>
           
        )
            
        
    }
           
               
       
     
    
    
    render() {
        
        return (

            <div className="ui celled list">{this.renderRecipe()}</div>
        )   
    
}}
// state should say global state

const mapStateToProps = (state, ownProps) => {
    // console.log(state.recipes[ownProps.match.params.id])
    // console.log(ownProps)

    return {
        recipe: state.recipes[ownProps.match.params.id]
    }
    }

export default connect(mapStateToProps, { fetchRecipe })(RecipeShow);
// if we console log the store we would see the return vlue from map.. and the mdp
