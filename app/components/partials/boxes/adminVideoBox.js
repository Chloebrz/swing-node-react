// Dependencies
import React from "react";
import styles from "../../../css/elements/featurette.css";

const VideoBox = props => {
    const { name, url, type, legend, date } = props;

    return (
        <div className={styles}>
            <hr className="featurette-divider" />
            <div className="featurette">
                <h2 className="featurette-heading">
                    {name}
                </h2>
                <video controls>
                    <source src={`/assets/uploads/${url}`} type={type} />
                    Votre navigateur ne supporte pas ces types de vidéos.
                </video>
                <p className="lead">
                    {legend}
                </p>
                <p className="featurette-text">
                    Ajouté le : {date}
                </p>
            </div>
        </div>
    );
};

export default VideoBox;
