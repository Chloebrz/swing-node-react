// Dependencies
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const PictureBox = props => {
    return (
        <div className="card">
            <img src={`data:${props.type};base64,${props.res}`} alt={props.name} />
            <p className="card-text">
                {props.legend}
            </p>
            <p className="card-text">
                Ajouté le : {props.date}{" "}
                {props.creatorId &&
                    <label>
                        par <Link to={`/profile/${props.creatorId}`}>{props.creator}</Link>
                    </label>}
            </p>
        </div>
    );
};

PictureBox.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    res: PropTypes.string,
    legend: PropTypes.string,
    date: PropTypes.string,
    creatorId: PropTypes.string,
    creator: PropTypes.string
};

export default PictureBox;
