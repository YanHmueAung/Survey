//surveyField contains logic to render a single
//label and text input
import React from "react";
//{...input} (onBlur={input.onBlur}  onChange={input.onChange})
export default ({ input, label, meta: { error, touched } }) => {
    //indicating two level ES6 destructing 
    //in meta there is an object which contains value like meta.error
    //in meta.touched is sensing while we focus on the field
    return (
        <div>
            <label>{label}</label>
            <input {...input} style={{ marginBottom: '5px' }} />
            <div className='red-text' style={{ marginBottom: '20px' }}>
                {touched && error}
            </div>

        </div>
    )
}