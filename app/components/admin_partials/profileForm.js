// Dependencies
import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import PropTypes from "prop-types";

const validate = values => {
    const errors = {};

    if (!values.firstname) errors.firstname = "Required";
    if (!values.lastname) errors.lastname = "Required";

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
                            {error}
                        </span>)}
            </div>
        </div>
    );
};

let ProfileForm = props => {
    const { handleSubmit, submitting, history } = props;

    return (
        <form className="profile-form" onSubmit={handleSubmit}>
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

ProfileForm.propTypes = {
    handleSubmit: PropTypes.func,
    id: PropTypes.string,
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    bio: PropTypes.string
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

ProfileForm = connect(mapStateToProps)(ProfileForm);

export default ProfileForm;
