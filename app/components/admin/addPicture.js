// Dependencies
import React, { Component } from "react";
import { connect } from "react-redux";

import { postPicture } from "../../actions";

class AddPicture extends Component {
    constructor() {
        super();

        this.state = {
            file: null,
            name: "",
            legend: ""
        };
    }

    componentWillReceiveProps(newProps) {
        if (newProps.path.post_success) this.props.history.push("/admin");
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.postPicture({
            name: this.state.name,
            img: this.state.file,
            legend: this.state.legend
        });
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
                <h1>Nouvelle image</h1>
                <p>
                    Ajouter une nouvelle image avec un titre (5 caractères minimum) et une légende
                    (10 caractères minimum).
                </p>

                <hr className="featurette-divider" />

                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="row">
                        <div className="col-md-7">
                            <input type="file" onChange={this.handleImageChange.bind(this)} />
                            <br />
                            <br />
                            <img src={this.state.file ? this.state.file.data : ""} />
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
                            Ajouter l'image
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps({ path }) {
    return { path };
}

export default connect(mapStateToProps, { postPicture })(AddPicture);
