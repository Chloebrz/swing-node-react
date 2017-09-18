// Dependencies
import React, { Component } from "react";
import PropTypes from "prop-types";

class ProfileForm extends Component {
    constructor(props) {
        super();

        this.state = {
            firstname: props.firstname || "",
            lastname: props.lastname || "",
            bio: props.bio || "",
            email: props.email
        };
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.handleSubmit({
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            bio: this.state.bio
        });
    }

    handleChange(e, field) {
        e.preventDefault();

        let state = this.state;
        state[field] = e.target.value;
        this.setState(state);
    }

    render() {
        return (
            <div className="profile-form">
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-5">
                        <img src={require("../../images/placeholders/profile.png")} />
                    </div>
                    <div className="col-lg-9 col-md-8 col-sm-7 margin-center">
                        <h4>Prénom :</h4>
                        <input
                            type="text"
                            placeholder="Prénom"
                            value={this.state.firstname}
                            onChange={e => this.handleChange(e, "firstname")}
                        />

                        <h4>Nom :</h4>
                        <input
                            type="text"
                            placeholder="Nom"
                            value={this.state.lastname}
                            onChange={e => this.handleChange(e, "lastname")}
                        />
                    </div>
                </div>

                <br />
                <br />

                <h4>Bio :</h4>
                <textarea
                    type="text"
                    rows="5"
                    placeholder="Quisque sollicitudin tellus non ipsum consectetur tincidunt."
                    value={this.state.bio}
                    onChange={e => this.handleChange(e, "bio")}
                />

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
                        onClick={() => this.props.history.push("/admin/profile")}
                    >
                        Annuler
                    </button>
                </div>
            </div>
        );
    }
}

ProfileForm.propTypes = {
    handleSubmit: PropTypes.func,
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    bio: PropTypes.string,
    email: PropTypes.string
};

export default ProfileForm;
