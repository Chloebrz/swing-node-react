// Dependencies
import React, { Component } from "react";
import PropTypes from "prop-types";

import style from "../../css/picture_form.css";

class PictureForm extends Component {
    constructor(props) {
        super();

        this.state = {
            file: null,
            name: props.name || "",
            legend: props.legend || "",
            res: props.res || require("../../images/icons/placeholder.png"),
            errorName: false,
            errorLegend: false,
            errorFile: false
        };
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState(
            {
                errorName: this.state.name.trim().length < 5,
                errorLegend: this.state.legend.trim().length < 15,
                errorFile: !this.state.file && !this.state.res
            },
            function() {
                if (!this.state.errorName && !this.state.errorLegend && !this.state.errorFile)
                    this.props.handleSubmit({
                        name: this.state.name,
                        img: this.state.file,
                        legend: this.state.legend
                    });
            }
        );
    }

    handleImageChange(e) {
        e.preventDefault();

        const reader = new FileReader();
        const file = e.target.files[0];

        reader.onload = upload => {
            this.setState({
                file: {
                    data: upload.target.result,
                    filename: file.name,
                    filetype: file.type
                },
                errorFile: false
            });
        };
        reader.readAsDataURL(file);
    }

    handleNameChange(e) {
        e.preventDefault();
        this.setState({ name: e.target.value, errorName: false });
    }

    handleLegendChange(e) {
        e.preventDefault();
        this.setState({ legend: e.target.value, errorLegend: false });
    }

    renderErrorName() {
        if (!this.state.errorName) return;
        return <div className="error">5 caractères minimum</div>;
    }

    renderErrorLegend() {
        if (!this.state.errorLegend) return;
        return <div className="error">15 caractères minimum</div>;
    }

    renderErrorImg() {
        if (!this.state.errorFile) return;
        return <div className="error">Sélectionner une image</div>;
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
                                    src={this.state.file ? this.state.file.data : this.state.res}
                                />
                            </label>
                            <input
                                id="file-input"
                                type="file"
                                onChange={this.handleImageChange.bind(this)}
                            />
                            {this.renderErrorImg()}
                        </div>

                        <div className="col-md-5">
                            <h4>Nom:</h4>
                            <input
                                type="text"
                                placeholder="Nom"
                                value={this.state.name}
                                onChange={this.handleNameChange.bind(this)}
                            />
                            {this.renderErrorName()}

                            <br />
                            <br />

                            <h4>Légende:</h4>
                            <textarea
                                type="text"
                                rows="5"
                                placeholder="Légende"
                                value={this.state.legend}
                                onChange={this.handleLegendChange.bind(this)}
                            />
                            {this.renderErrorLegend()}
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
