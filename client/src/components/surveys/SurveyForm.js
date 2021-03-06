//SurveyForm shows a form for a user to add input
import React from "react";
import _ from 'lodash';
import { reduxForm, Field } from 'redux-form';
import { Link } from "react-router-dom";
import SurveyField from "./SurveyField";
import validateEmails from "../../utils/validateEmails";
import formFields from "./formFields";
//Survey Field is a component to 

class SurveyForm extends React.Component {
    renderFields() {//looping the data using the lodash so that we dont need to 
        //write the component and type again and again. 
        return _.map(formFields, ({ label, name }) => {
            return <Field component={SurveyField} type="text" label={label} name={name} />
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                    {this.renderFields()}
                    <Link to="/surveys" className="red btn-flat white-text">
                        Cancel
                    </Link>
                    <button
                        type='submit'
                        className="teal btn-flat right white-text">
                        Next
                        <i className="material-icons right">done</i>
                    </button>
                </form>
            </div>
        )
    }
}
function validate(values) {
    //redux form validate function
    const errors = {};

    errors.recipients = validateEmails(values.recipients || '')

    _.each(formFields, ({ name }) => {
        if (!values[name]) {
            errors[name] = 'you must provide a value';
        }
    })
    //if Redux form get the 'error' object back is emply,
    //redux form assumes that the entire form is valid and everything is ready and Good
    //if error object has somethings,Redux form assumes that it has error and do not submit

    return errors;
}
export default reduxForm({
    validate,
    //unique name for the form
    form: 'surveyForm',
    //redux form destory automatically when change to another component
    //to prevent this we use destroyOnUnmount
    destroyOnUnmount: false
})(SurveyForm);