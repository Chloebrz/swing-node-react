// Dependencies
import React from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";

import styles from "../../css/partials/form.css";

const validate = (values, props) => {
    const { signup } = props;
    const errors = {};

    if (!values.email) errors.email = "Obligatoire";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
        errors.email = "Adresse mail non valide";

    if (!values.password) errors.password = "Obligatoire";
    else if (signup && values.password.trim().length < 5) errors.password = "5 caractère minimum";

    if (signup && !values.password_conf) errors.password_conf = "Obligatoire";
    else if (signup && values.password_conf !== values.password)
        errors.password_conf = "Mots de passe non identiques";

    return errors;
};

const renderField = ({ input, label, type, meta: { touched, error } }) =>
    <div className="field">
        <input {...input} placeholder={"* " + label} type={type} />
        {touched &&
            (error &&
                <span className="error">
                    <i className="fa fa-exclamation-circle" />
                    {error}
                </span>)}
    </div>;

let LoginSignupForm = props => {
    const { handleSubmit, submitting, err } = props;
    const { title, signup, redirectQuestion, redirectLink, redirectTitle } = props;

    return (
        <div className={styles} className="signup-login-box">
            <div className="center">
                <h3>
                    {title} avec
                </h3>
                <a href="/auth/google">
                    <img
                        className="icon icon-clickable"
                        src={require("../../images/icons/google.png")}
                    />
                </a>
            </div>

            <p className="divider">ou</p>
            <form onSubmit={handleSubmit}>
                <Field name="email" component={renderField} type="text" label="Adresse mail" />
                <Field
                    name="password"
                    component={renderField}
                    type="password"
                    label="Mot de passe"
                />
                {signup &&
                    <Field
                        name="password_conf"
                        component={renderField}
                        type="password"
                        label="Confirmation mot de passe"
                    />}
                {err &&
                    <div className="field center error">
                        <i className="fa fa-exclamation-circle" />
                        {err}
                    </div>}
                <button type="submit" className="btn btn-success" disabled={submitting}>
                    {title}
                </button>
            </form>
            <div className="hint">
                <p>
                    {redirectQuestion} <Link to={redirectLink}>{redirectTitle}</Link>
                </p>
            </div>
        </div>
    );
};

LoginSignupForm.propTypes = {};

LoginSignupForm = reduxForm({
    form: "register",
    validate
})(LoginSignupForm);

export default LoginSignupForm;
