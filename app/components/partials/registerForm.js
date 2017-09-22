// Dependencies
import React from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";

import style from "../../css/signup-login.css";

const validate = values => {
    const errors = {};

    if (!values.email) errors.email = "Required";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
        errors.email = "Invalid email address";

    if (!values.password) errors.password = "Required";
    else if (values.password.trim().length < 5) errors.password = "Must be at least 5";

    if (!values.password_conf) errors.password_conf = "Required";
    else if (values.password_conf !== values.password) errors.password_conf = "Must be the same";

    return errors;
};

const renderField = ({ input, label, type, meta: { touched, error } }) =>
    <div className="field">
        <input {...input} placeholder={"* " + label} type={type} />
        {touched &&
            (error &&
                <span className="error">
                    {error}
                </span>)}
    </div>;

let RegisterForm = props => {
    const { handleSubmit, submitting, err } = props;

    return (
        <div className={style} className="signup-login-box">
            <div className="center">
                <h3>S'inscrire avec</h3>
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
                <Field
                    name="password_conf"
                    component={renderField}
                    type="password"
                    label="Confirmation mot de passe"
                />
                {err &&
                    <div className="field center error">
                        {err}
                    </div>}
                <button type="submit" className="btn btn-success" disabled={submitting}>
                    S'inscrire
                </button>
            </form>
            <div className="hint">
                <p>
                    Déjà inscrit ? <Link to="/login">Se connecter</Link>
                </p>
            </div>
        </div>
    );
};

RegisterForm.propTypes = {};

RegisterForm = reduxForm({
    form: "register",
    validate
})(RegisterForm);

export default RegisterForm;
