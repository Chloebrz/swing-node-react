// Dependencies
import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

import styles from "../../css/partials/form.css";

const validate = values => {
    const errors = {};

    if (!values.firstname) errors.firstname = "Obligatoire";
    if (!values.lastname) errors.lastname = "Obligatoire";

    return errors;
};

const renderField = ({
    input,
    label,
    type,
    meta: { touched, error },
    textarea,
    rows,
    placeholder
}) => {
    const inputType = <input {...input} placeholder={"* " + label} type={type} />;
    const textareaType = <textarea {...input} placeholder={placeholder} rows={rows} type={type} />;

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

let ProfileForm = props => {
    const { handleSubmit, submitting, history } = props;

    return (
        <form className={styles} onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-5">
                    <img src={require("../../images/placeholders/profile.png")} />
                </div>
                <div className="col-lg-9 col-md-8 col-sm-7 margin-center">
                    <Field name="firstname" label="Prénom" component={renderField} type="text" />
                    <Field name="lastname" label="Nom" component={renderField} type="text" />
                </div>
            </div>

            <br />
            <br />

            <Field
                name="bio"
                label="Bio"
                component={renderField}
                type="text"
                textarea={true}
                rows="5"
                placeholder="Quisque sollicitudin tellus non ipsum consectetur tincidunt."
            />

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
    );
};

ProfileForm = reduxForm({
    form: "profile",
    validate
})(ProfileForm);

function mapStateToProps({ auth }) {
    return {
        initialValues: {
            id: auth._id,
            firstname: auth.name.firstname,
            lastname: auth.name.lastname,
            bio: auth.bio
        }
    };
}

export default connect(mapStateToProps)(ProfileForm);
