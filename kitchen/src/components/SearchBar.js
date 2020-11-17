import React from 'react';
import { connect } from 'react-redux';
import {  getYums } from '../actions';
import { Field, reduxForm } from 'redux-form'

class SearchBar extends React.Component {

    

    renderInput = ({ input, label }) => {
      
                return(
               <div>
                    <label>{label}</label>
                    <input {...input} autoComplete="off"/>
                 </div>
                )}
            onSubmit = (formValues) => this.props.getYums(formValues) 



          


    render() {
        // console.log(this.props)
       return (
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui category search">
       <Field name="q" component={this.renderInput} label="Search Recipes"/> 
       <button className="ui button primary">Submit</button>   
      </form>
   
    )
    
    }
    
}




const formWrapped =  reduxForm({
    form: 'getYums'
})(SearchBar);



    export default connect(null, { getYums } )(formWrapped);
   