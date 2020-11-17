import React from 'react';
import { connect } from 'react-redux';
import { fetchRecipe, editRecipe } from '../../actions'
import { Field, reduxForm } from 'redux-form'

class RecipeEdit extends React.Component {

    componentDidMount() {
       this.props.fetchRecipe(this.props.match.params.id)
    }
    onSubmit = (formValues) => {
        this.props.editRecipe(this.props.match.params.id, formValues)
     }
    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>

                </div>
            );
        }
    }

    renderInput = ({ input, label, meta }) => {
//   console.log(meta)
const className = `field ${meta.error && meta.touched ? 'error': ''}`
        return(
        <div className={className}>
            <label>{label}</label>
          
         <input id={this.props.userId}  {...input} autoComplete="off"/>
        
        <div>{this.renderError(meta)}</div>
       
        </div>
        )}


    render() {
        console.log(this.props);
        if(!this.props.recipe) {
            return <div>loading....</div>
        }
    return <div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}  className="ui form error">
           
            <Field name="title" component={this.renderInput}  label="Enter Title"/>     
            <Field name="instructions" component={this.renderInput} label="Enter instructions"/> 
            <Field name="refrences" component={this.renderInput} label="Enter reference link if any"/> 
            <Field name="image" component={this.renderInput} label="Enter image address if any otherwise enter none"/> 
      
        
           <button className="ui button primary">Submit</button>   
          </form>
        </div>

    }
}




const validate = (formValues) => {
    const errors = {};
    if (!formValues.title) {
        errors.title = 'You must enter a title'
    }
    if (!formValues.instructions) {
        errors.instructions = 'You must enter a description'
    }
    return errors;
}




const mapStateToProps = (state, ownProps) => {
    // console.log(state, ownProps)
    return { recipe: state.recipes[ownProps.match.params.id] };
}




const formWrapped =  reduxForm({
    form: 'recipeEditeForm',
    validate
}) (RecipeEdit);


export default connect(
    mapStateToProps,
    { fetchRecipe, editRecipe }
)(formWrapped)