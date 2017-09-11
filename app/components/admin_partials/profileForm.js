// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
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
            <div>
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

                <br />
                <br />

                <h4>Bio :</h4>
                <textarea
                    type="text"
                    rows="5"
                    placeholder="Bio"
                    value={this.state.bio}
                    onChange={e => this.handleChange(e, "bio")}
                />

                <br />
                <br />

                <h4>Adresse mail :</h4>
                <p>
                    {this.props.email}
                </p>

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
                        onClick={() => this.props.history.push("/admin/profile")}
                    >
                        Annuler
                    </button>
                </div>
            </div>
        );
    }
}

export default ProfileForm;
