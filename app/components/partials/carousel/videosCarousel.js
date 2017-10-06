// Dependencies
import React from "react";
import { Carousel } from "react-responsive-carousel";

const renderVideos = videos => {
    return videos.map(video => {
        return (
            <div key={video._id}>
                <h3 className="title">
                    {video.name}
                </h3>
                <video controls>
                    <source src={`/assets/uploads/${video.url}`} type={video.mimetype} />
                    Votre navigateur ne supporte pas ces types de vidéos.
                </video>
                <p>
                    {video.legend}
                </p>
            </div>
        );
    });
};

const VideosCarousel = props => {
    const { videos } = props;

    return (
        <Carousel
            infiniteLoop={true}
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            dynamicHeight={true}
        >
            {renderVideos(videos)}
        </Carousel>
    );
};

export default VideosCarousel;
