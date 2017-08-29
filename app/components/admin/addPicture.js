// Dependencies
import React, { Component } from "react";
import { connect } from "react-redux";

import { postPicture } from "../../actions";

class AddPicture extends Component {
    constructor() {
        super();

        this.state = {
            file: null,
            text: ""
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.postPicture({
            img: this.state.file,
            legend: this.state.text
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

    handleTextChange(e) {
        e.preventDefault();
        this.setState({ text: e.target.value });
    }

    render() {
        return (
            <div>
                <h1>Add a picture page</h1>

                <form onSubmit={e => this.handleSubmit(e)}>
                    <input type="file" onChange={this.handleImageChange.bind(this)} />
                    <input
                        type="text"
                        placeholder="Type a legend for the picture"
                        value={this.state.text}
                        onChange={this.handleTextChange.bind(this)}
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

export default connect(null, { postPicture })(AddPicture);
