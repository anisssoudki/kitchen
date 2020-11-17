import React from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { createRecipe } from '../../actions'



class RecipeCreate extends React.Component  {
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
 
const className = `field ${meta.error && meta.touched ? 'error': ''}`
        return(
        <div className={className}>
            <label>{label}</label>
          
         <input  {...input} autoComplete="off"/>
        
        <div>{this.renderError(meta)}</div>
       
        </div>
        )}

onSubmit = (formValues) => {
  
   this.props.createRecipe(formValues)
}

    render() {

    return (
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
         <h1> Create a new Recipe </h1> 
        <div className='ui huge header'>
       <Field name="title" component={this.renderInput} label="Enter Title"/> 
       <Field name="instructions" component={this.renderInput} label="Enter instructions"/> 
       <Field name="refrences" component={this.renderInput} label="Enter reference link if any"/> 
       <Field name="image" component={this.renderInput} label="Enter image address if any otherwise enter none"/> 
       </div>
      
       <button className="ui button primary">Submit</button>   
      </form>
    )
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


const formWrapped =  reduxForm({
    form: 'recipeCreateForm',
    validate
}) (RecipeCreate);


export default connect(
    null,
    { createRecipe }
)(formWrapped)