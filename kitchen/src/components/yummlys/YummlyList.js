import React from 'react';
import { connect } from 'react-redux'
import {  getYums } from '../../actions';
import { Link } from 'react-router-dom'
// import SearchBar from '../SearchBar'

class YumList extends React.Component {

    render() {
    
        return (
        
            this.props.yums[0].feed.map(recipe => {
      
                return(
                    <div>
                       <a href={recipe.display.source.sourceRecipeUrl} target={"_blank"}>  <h1>{recipe.display.displayName}</h1> </a> 
                       <img src={recipe.display.images[0]} alt={recipe.display.displayName} />
                     
                    </div>
                )
            
            })
        )
}}

const mapStateToProps = (state) => {
   
    return {
        yums: Object.values(state.yums)
       
    }
}

export default connect(mapStateToProps, { getYums })(YumList);