// Dependencies
import React from "react";
import PropTypes from "prop-types";

const ContactBox = props => {
    return (
        <div>
            <h1>
                {props.name}
            </h1>
            <p>
                {props.desc}
                {props.children}
            </p>
            <p>
                {props.emailDesc}{" "}
                <a href={"mailto:" + props.emailAddress + "?subject=SWING"}>ici</a>
            </p>
        </div>
    );
};

ContactBox.propTypes = {
    name: PropTypes.string,
    desc: PropTypes.string,
    children: PropTypes.array,
    emailDesc: PropTypes.string,
    emailAddress: PropTypes.string
};

export default ContactBox;
