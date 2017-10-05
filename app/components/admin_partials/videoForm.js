// Dependencies
import React from "react";
import { Field, reduxForm } from "redux-form";

import FileInput from "./fileInput";
import RenderField from "../partials/renderField";
import styles from "../../css/partials/form.css";

const validate = values => {
    const errors = {};

    if (!values.name) errors.name = "Obligatoire";
    else if (values.name.trim().length < 5) errors.name = "5 catactères minimum";

    if (!values.legend) errors.legend = "Obligatoire";
    else if (values.legend.trim().length < 15) errors.legend = "15 caractères minimum";

    if (!values.url) errors.url = "Obligatoire";

    return errors;
};

let VideoForm = props => {
    const { handleSubmit, submitting, history } = props;

    return (
        <div className={styles}>
            <hr className="featurette-divider" />

            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-7">
                        {/* <Field type="file" name="image" component={FileInput} /> */}
                        <Field name="url" label="URL" component={RenderField} type="text" />
                    </div>

                    <div className="col-md-5">
                        <Field name="name" label="Nom" component={RenderField} type="text" />
                        <Field
                            name="legend"
                            label="Légende"
                            component={RenderField}
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

VideoForm = reduxForm({
    form: "video",
    validate
})(VideoForm);

export default VideoForm;
