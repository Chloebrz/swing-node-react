// Dependencies
import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

import TextInput from "../../elements/forms/textInput";
import styles from "../../../css/elements/form.css";

const validate = values => {
    const errors = {};

    if (!values.firstname) errors.firstname = "Obligatoire";
    if (!values.lastname) errors.lastname = "Obligatoire";

    return errors;
};

let ProfileForm = props => {
    const { handleSubmit, submitting, history } = props;

    return (
        <form className={styles} onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-5">
                    <img src={require("../../../images/placeholders/profile.png")} />
                </div>
                <div className="col-lg-9 col-md-8 col-sm-7 margin-center">
                    <Field name="firstname" label="Prénom" component={TextInput} type="text" />
                    <Field name="lastname" label="Nom" component={TextInput} type="text" />
                </div>
            </div>

            <br />
            <br />

            <Field
                name="bio"
                label="Bio"
                component={TextInput}
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
