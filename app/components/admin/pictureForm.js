// Dependencies
import React, { Component } from "react";

class PictureForm extends Component {
    constructor(props) {
        super();

        this.state = {
            file: null,
            name: props.name || "",
            legend: props.legend || "",
            res: props.res || ""
        };
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.handleSubmit({
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

export default PictureForm;
