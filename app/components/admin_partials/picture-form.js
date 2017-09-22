// Dependencies
import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm, change } from "redux-form";
import PropTypes from "prop-types";

import style from "../../css/picture_form.css";

const validate = values => {
    const errors = {};

    if (!values.name) errors.name = "Required";
    else if (values.name.trim().length < 5) errors.name = "Must be at least 5";

    if (!values.legend) errors.legend = "Required";
    else if (values.legend.trim().length < 15) errors.legend = "Must be at least 15";

    if (!values.file) errors.file = "Required";

    return errors;
};

const renderField = ({ input, label, type, meta: { touched, error }, textarea, rows }) => {
    const inputType = <input {...input} placeholder={"* " + label} type={type} />;
    const textareaType = <textarea {...input} placeholder={"* " + label} rows={rows} type={type} />;

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
                            {error}
                        </span>)}
            </div>
        </div>
    );
};

let PictureForm = props => {
    const { handleSubmit, submitting, history } = props;

    return (
        <div className={style}>
            <hr className="featurette-divider" />

            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-7">
                        <input
                            name="image"
                            type="file"
                            value=""
                            onChange={e => {
                                e.preventDefault();

                                const reader = new FileReader();
                                const file = e.target.files[0];

                                reader.onload = upload => {
                                    let file_value = {
                                        data: upload.target.result,
                                        filename: file.name,
                                        filetype: file.type
                                    };
                                    props.dispatch(change("picture", "image", file_value));
                                };
                                reader.readAsDataURL(file);
                            }}
                        />
                    </div>

                    <div className="col-md-5">
                        <Field name="name" label="Nom" component={renderField} type="text" />
                        <Field
                            name="legend"
                            label="Légende"
                            component={renderField}
                            type="text"
                            textarea={true}
                            rows="5"
                        />
                    </div>
                </div>
                <br />
                <br />
                <div className="center">
                    <button className="btn btn-lg btn-success" disabled={submitting} type="submit">
                        Sauvegarder
                    </button>
                    <button
                        className="btn btn-secondary right"
                        onClick={() => history.push("/admin/profile")}
                    >
                        Annuler
                    </button>
                </div>
            </form>
        </div>
    );
};

PictureForm.propTypes = {};

PictureForm = reduxForm({
    form: "picture",
    validate
})(PictureForm);

export default PictureForm;
