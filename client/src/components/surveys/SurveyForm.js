//SurveyForm shows a form for a user to add input
import React from "react";
import _ from 'lodash';
import { reduxForm, Field } from 'redux-form';
import { Link } from "react-router-dom";
import SurveyField from "./SurveyField";
//Survey Field is a component to 
const FIELDS = [
    { label: 'Survey Title', name: 'title' },
    { label: 'Survey Line', name: 'subject' },
    { label: 'Email Body', name: 'body' },
    { label: 'Recipient List', name: 'emails' }
]

class SurveyForm extends React.Component {
    renderFields() {//looping the data using the lodash so that we dont need to 
        //write the component and type again and again. 
        return _.map(FIELDS, ({ label, name }) => {
            return <Field component={SurveyField} type="text" label={label} name={name} />
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(value => console.log(value))}>
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
    _.each(FIELDS, ({ name }) => {
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
    form: 'surveryForm'
})(SurveyForm);