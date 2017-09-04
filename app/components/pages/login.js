// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Contact extends Component {
    render() {
        return (
            <div>
                <form action="/auth/login" method="post">
                    <div>
                        <label>Adresse mail :</label>
                        <input type="text" name="email" />
                    </div>
                    <div>
                        <label>Mot de passe :</label>
                        <input type="password" name="password" />
                    </div>
                    <div>
                        <input type="submit" value="Log In" />
                    </div>
                </form>

                <form action="/auth/signup" method="post">
                    <div>
                        <label>Adresse mail :</label>
                        <input type="text" name="email" />
                    </div>
                    <div>
                        <label>Mot de passe :</label>
                        <input type="password" name="password" />
                    </div>
                    <div>
                        <input type="submit" value="Sign Up" />
                    </div>
                </form>

                <a href="/auth/google">
                    <button className="btn btn-secondary">Login with Google</button>
                </a>
            </div>
        );
    }
}

export default Contact;
