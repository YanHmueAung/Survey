//SurveyFormReview shows users their from inputs from for review
import React from "react";
import { connect } from "react-redux";
import formFields from "./formFields";
import _ from "lodash";
const SurveyFormReview = ({ onCancel, formValues }) => {
    const reviewFields = _.map(formFields, field => {
        return (
            <div key={field.name}>
                <label>{field.label}</label>
                <div>{formValues[field.name]}</div>
            </div>
        )
    })
    return (
        <div>
            <h5>Confirm Your Entries</h5>

            {reviewFields}

            <button className="yellow darken-3 btn-flat" onClick={onCancel}>
                Back
            </button>
        </div>
    )
}
//state.form.surveyForm.values
function mapStateToProps(state) {
    console.log(state.form.surveyForm.values);
    return { formValues: state.form.surveyForm.values };
}
export default connect(mapStateToProps)(SurveyFormReview);