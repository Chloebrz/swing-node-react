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
                <h1>Update a picture page</h1>

                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="file" onChange={this.handleImageChange.bind(this)} />
                    <input
                        type="text"
                        placeholder="Type a name for the picture"
                        value={this.state.name}
                        onChange={this.handleNameChange.bind(this)}
                    />
                    <input
                        type="text"
                        placeholder="Type a legend for the picture"
                        value={this.state.legend}
                        onChange={this.handleLegendChange.bind(this)}
                    />
                    <button type="submit" onClick={this.handleSubmit.bind(this)}>
                        Upload Image
                    </button>
                </form>
                <img src={this.state.file ? this.state.file.data : this.state.res} />
            </div>
        );
    }
}

function mapStateToProps({ path, pictures }) {
    return { path, picture: pictures[0] };
}

export default connect(mapStateToProps, { fetchPicture, updatePicture })(UpdatePicture);
