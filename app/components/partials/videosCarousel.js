// Dependencies
import React from "react";
import { Carousel } from "react-responsive-carousel";

const renderVideos = videos => {
    return videos.map(video => {
        return (
            <div key={video._id}>
                <h3 className="title">
                    {video.title}
                </h3>
                <video controls>
                    <source
                        src={require(`../../../public/assets/videos/${video.link}.mp4`)}
                        type="video/mp4"
                    />
                    <source
                        src={require(`../../../public/assets/videos/${video.link}.webm`)}
                        type="video/webm"
                    />
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
