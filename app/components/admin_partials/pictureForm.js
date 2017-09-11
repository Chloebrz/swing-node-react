// Dependencies
import React, { Component } from "react";
import PropTypes from "prop-types";

import style from "../../css/picture_form.css";

class PictureForm extends Component {
    constructor(props) {
        super();

        this.state = {
            picture: {
                name: props.name || "",
                legend: props.legend || "",
                file: null,
                res: props.res || require("../../images/icons/placeholder.png")
            },
            errors: {
                name: false,
                legend: false,
                file: false
            }
        };
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState(
            {
                errors: {
                    name: this.state.picture.name.trim().length < 5,
                    legend: this.state.picture.legend.trim().length < 15,
                    file:
                        !this.state.picture.file &&
                        this.state.picture.res === require("../../images/icons/placeholder.png")
                }
            },
            function() {
                if (this.state.errors.name || this.state.errors.legend || this.state.errors.file)
                    return;

                this.props.handleSubmit({
                    name: this.state.picture.name,
                    img: this.state.picture.file,
                    legend: this.state.picture.legend
                });
            }
        );
    }

    handleImageChange(e) {
        e.preventDefault();

        const reader = new FileReader();
        const file = e.target.files[0];

        reader.onload = upload => {
            let picture = this.state.picture;
            picture.file = {
                data: upload.target.result,
                filename: file.name,
                filetype: file.type
            };

            let errors = this.state.errors;
            errors.file = false;
            this.setState({ picture, errors });
        };
        reader.readAsDataURL(file);
    }

    handleChange(e, field) {
        e.preventDefault();

        let picture = this.state.picture;
        picture[field] = e.target.value;

        let errors = this.state.errors;
        errors[field] = false;

        this.setState({ picture, errors });
    }

    render() {
        return (
            <div className={style}>
                <hr className="featurette-divider" />

                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="row">
                        <div className="col-md-7 image-upload">
                            <label htmlFor="file-input">
                                <img
                                    src={
                                        this.state.picture.file
                                            ? this.state.picture.file.data
                                            : this.state.picture.res
                                    }
                                />
                            </label>
                            <input
                                id="file-input"
                                type="file"
                                onChange={this.handleImageChange.bind(this)}
                            />
                            {this.state.errors.file &&
                                <div className="error">Sélectionner une image</div>}
                        </div>

                        <div className="col-md-5">
                            <h4>Nom :</h4>
                            <input
                                type="text"
                                placeholder="Nom"
                                value={this.state.picture.name}
                                onChange={e => this.handleChange(e, "name")}
                            />
                            {this.state.errors.name &&
                                <div className="error">5 caractères minimum</div>}

                            <br />
                            <br />

                            <h4>Légende :</h4>
                            <textarea
                                type="text"
                                rows="5"
                                placeholder="Légende"
                                value={this.state.picture.legend}
                                onChange={e => this.handleChange(e, "legend")}
                            />
                            {this.state.errors.legend &&
                                <div className="error">15 caractères minimum</div>}
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className="center">
                        <button
                            className="btn btn-lg btn-success"
                            type="submit"
                            onClick={this.handleSubmit.bind(this)}
                        >
                            Sauvegarder
                        </button>
                        <button
                            className="btn btn-secondary right"
                            onClick={() => this.props.history.push("/admin")}
                        >
                            Annuler
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

PictureForm.propTypes = {
    name: PropTypes.string,
    legend: PropTypes.string,
    res: PropTypes.string,
    handleSubmit: PropTypes.func
};

export default PictureForm;
