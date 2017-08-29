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
                <h1>Add a picture page</h1>

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
                <img src={this.state.file ? this.state.file.data : ""} />
            </div>
        );
    }
}

function mapStateToProps({ path }) {
    return { path };
}

export default connect(mapStateToProps, { postPicture })(AddPicture);
