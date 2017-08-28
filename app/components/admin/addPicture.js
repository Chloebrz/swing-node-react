// Dependencies
import React, { Component } from "react";

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
        console.log("handle submit", this.state);
    }

    handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file
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
            </div>
        );
    }
}

export default AddPicture;
