// Dependencies
import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import PropTypes from "prop-types";

import TextInput from "../../elements/forms/textInput";
import FileInput from "../../elements/forms/basicFileInput";
import styles from "../../../css/elements/form.css";

const validate = (values, props) => {
    const errors = {};

    if (!values.name) errors.name = "Obligatoire";
    else if (values.name.trim().length < 5) errors.name = "5 catactères minimum";

    if (!values.legend) errors.legend = "Obligatoire";
    else if (values.legend.trim().length < 15) errors.legend = "15 caractères minimum";

    if (!props.update && !values.file) errors.file = "Obligatoire";

    return errors;
};

const renderFileInput = props => {
    if (props.update)
        return (
            <video controls>
                <source src={`/assets/uploads/${props.video.url}`} type={props.video.type} />
                Votre navigateur ne supporte pas ces types de vidéos.
            </video>
        );

    return <Field name="file" component={FileInput} />;
};

let VideoForm = props => {
    const { handleSubmit, submitting, history } = props;

    return (
        <div className={styles}>
            <hr className="divider" />

            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-7">
                        {renderFileInput(props)}
                    </div>

                    <div className="col-md-5">
                        <Field name="name" label="Nom" component={TextInput} type="text" />
                        <Field
                            name="legend"
                            label="Légende"
                            component={TextInput}
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
                        onClick={() => history.push("/admin/videos")}
                    >
                        Annuler
                    </button>
                </div>
            </form>
        </div>
    );
};

VideoForm.propTypes = {
    video: PropTypes.object
};

function mapStateToProps(state, props) {
    const initialValues = props.video ? { name: props.video.name, legend: props.video.legend } : {};
    return { initialValues };
}

VideoForm = reduxForm({
    form: "video",
    validate
})(VideoForm);

export default connect(mapStateToProps)(VideoForm);
