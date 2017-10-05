// Dependencies
import React from "react";

const VideoBox = props => {
    const { name, url, legend, date } = props;

    return (
        <div>
            <hr className="featurette-divider" />
            <div className="featurette">
                <h2 className="featurette-heading">
                    {name}
                </h2>
                <video controls>
                    <source src={`/assets/videos/${url}.mp4`} type="video/mp4" />
                    <source src={`/assets/videos/${url}.webm`} type="video/webm" />
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
