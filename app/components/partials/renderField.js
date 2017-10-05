// Dependencies
import React from "react";

const RenderField = ({
    input,
    label,
    type,
    meta: { touched, error },
    textarea,
    rows,
    placeholder
}) => {
    const inputType = (
        <input {...input} placeholder={placeholder ? placeholder : "* " + label} type={type} />
    );
    const textareaType = (
        <textarea
            {...input}
            placeholder={placeholder ? placeholder : "* " + label}
            rows={rows}
            type={type}
        />
    );

    return (
        <div className="field">
            <h4>
                {label + " :"}
            </h4>
            <div>
                {textarea ? textareaType : inputType}
                {touched &&
                    (error &&
                        <span className="error">
                            <i className="fa fa-exclamation-circle" />
                            {error}
                        </span>)}
            </div>
        </div>
    );
};

export default RenderField;
