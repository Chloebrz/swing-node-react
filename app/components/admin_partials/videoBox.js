// Dependencies
import React from "react";

const VideoBox = props => {
    const { name, url, type, legend, date } = props;

    return (
        <div>
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
                <p className="card-text">
                    Ajouté le : {date}
                </p>
            </div>
        </div>
    );
};

export default VideoBox;
