// Dependencies
import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchPicture, updatePicture } from "../../actions";

class UpdatePicture extends Component {
    constructor() {
        super();

        this.state = {
            file: null,
            name: "",
            legend: "",
            res: ""
        };
    }

    componentWillMount() {
        this.props.fetchPicture({ id: this.props.match.params.id });
    }

    componentWillReceiveProps(newProps) {
        if (newProps.path.update_success) this.props.history.push("/admin");

        if (newProps.picture)
            this.state = {
                res: `data:${newProps.picture.img.contentType};base64,${newProps.picture.img.res}`,
                name: newProps.picture.name,
                legend: newProps.picture.legend
            };
    }

    handleSubmit(e) {
        e.preventDefault();

        var picture = {
            id: this.props.match.params.id,
            name: this.state.name,
            legend: this.state.legend
        };

        if (this.state.file) picture.img = this.state.file;
        this.props.updatePicture(picture);
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
                }
            });
        };
        reader.readAsDataURL(file);
    }

    handleNameChange(e) {
        e.preventDefault();
        this.setState({ name: e.target.value });
    }

    handleLegendChange(e) {
        e.preventDefault();
        this.setState({ legend: e.target.value });
    }

    render() {
        return (
            <div>
                <h1>Modifier l'image</h1>
                <p>
                    Modifier l'image sélectionnée avec un titre (5 caractères minimum) et une
                    légende (10 caractères minimum).
                </p>

                <hr className="featurette-divider" />

                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="row">
                        <div className="col-md-7">
                            <input type="file" onChange={this.handleImageChange.bind(this)} />
                            <br />
                            <br />
                            <img src={this.state.file ? this.state.file.data : this.state.res} />
                        </div>

                        <div className="col-md-5">
                            <h4>Nom:</h4>
                            <input
                                type="text"
                                placeholder="Nom"
                                value={this.state.name}
                                onChange={this.handleNameChange.bind(this)}
                            />

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
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps({ path, pictures }) {
    return { path, picture: pictures[0] };
}

export default connect(mapStateToProps, { fetchPicture, updatePicture })(UpdatePicture);
