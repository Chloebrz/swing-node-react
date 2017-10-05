// Dependencies
import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import PropTypes from "prop-types";

import FileInput from "./fileInput";
import styles from "../../css/partials/form.css";

const validate = values => {
    const errors = {};

    if (!values.name) errors.name = "Obligatoire";
    else if (values.name.trim().length < 5) errors.name = "5 catactères minimum";

    if (!values.legend) errors.legend = "Obligatoire";
    else if (values.legend.trim().length < 15) errors.legend = "15 caractères minimum";

    if (!values.image) errors.image = "Obligatoire";

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
                            <i className="fa fa-exclamation-circle" />
                            {error}
                        </span>)}
            </div>
        </div>
    );
};

let PictureForm = props => {
    const { handleSubmit, submitting, history } = props;

    return (
        <div className={styles}>
            <hr className="featurette-divider" />

            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-7">
                        <Field type="file" name="image" component={FileInput} />
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
                        onClick={() => history.push("/admin")}
                    >
                        Annuler
                    </button>
                </div>
            </form>
        </div>
    );
};

PictureForm.propTypes = {
    picture: PropTypes.object
};

function mapStateToProps(state, props) {
    const initialValues = props.picture
        ? {
              image: {
                  data: `data:${props.picture.img.contentType};base64,${props.picture.img.res}`
              },
              name: props.picture.name,
              legend: props.picture.legend
          }
        : {};

    return { initialValues };
}

PictureForm = reduxForm({
    form: "picture",
    validate
})(PictureForm);

export default connect(mapStateToProps)(PictureForm);
