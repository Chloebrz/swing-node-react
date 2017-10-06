// Dependencies
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import moment from "moment";
moment.locale("fr");

import { fetchPictures } from "../../actions/pictures";
import { fetchVideos } from "../../actions/videos";
import PictureBox from "../../components/partials/boxes/pictureBox";
import PicturesCarousel from "../../components/partials/carousel/picturesCarousel";
import VideosCarousel from "../../components/partials/carousel/videosCarousel";
import styles from "../../css/pages/images.css";

class Images extends Component {
    constructor() {
        super();

        this.state = {
            album: true,
            n: 0
        };
    }

    componentDidMount() {
        this.props.fetchPictures({ n: this.state.n });
        this.props.fetchVideos();
    }

    renderLoadMore() {
        if (this.props.pictures.length === 0 || this.props.fetch_pictures_done) return;

        return (
            <div className="center">
                <button
                    className="btn btn-secondary"
                    onClick={() => {
                        const n = ++this.state.n;
                        this.setState({ n });
                        this.props.fetchPictures({ n: this.state.n });
                    }}
                >
                    Plus
                </button>
            </div>
        );
    }

    renderAlbum() {
        return this.props.pictures.map(picture => {
            return (
                <PictureBox
                    key={picture._id}
                    name={picture.name}
                    type={picture.img.contentType}
                    res={picture.img.res}
                    legend={picture.legend}
                    date={moment(picture.createdAt).format("D MMMM YY")}
                    creatorId={picture.creatorId}
                    creator={
                        picture.user_doc &&
                        `${picture.user_doc[0].name.firstname} ${picture.user_doc[0].name.lastname}`
                    }
                />
            );
        });
    }

    renderCarousel() {
        return <PicturesCarousel pictures={this.props.pictures} />;
    }

    renderPictures() {
        if (!this.props.fetch_pictures_success)
            return (
                <img
                    className="icon icon-xl icon-loading"
                    src={require("../../images/icons/loading.gif")}
                />
            );

        if (this.props.pictures.length === 0) return <div>Pas d'images</div>;

        if (this.state.album) return this.renderAlbum();
        return this.renderCarousel();
    }

    renderVideos() {
        if (!this.props.fetch_videos_success)
            return (
                <img
                    className="icon icon-xl icon-loading"
                    src={require("../../images/icons/loading.gif")}
                />
            );

        if (this.props.videos.length === 0) return <div>Pas de videos</div>;
        return <VideosCarousel videos={this.props.videos} />;
    }

    render() {
        return (
            <div className={styles}>
                <div className="videos">
                    <h1>Videos</h1>

                    <p>
                        Ce projet a commencé par la validation du concept grâce à des calculs
                        complexes. Puis a suivi la construction de prototypes de plus en plus
                        avancés afin de tester le concept en navigation. Les vidéos ci-dessous
                        dressent un historique de ces prototypes et présentent un virement sous
                        différents angles.
                    </p>

                    {this.renderVideos()}
                </div>

                <div className="photos">
                    <h1>Photos</h1>

                    <p>
                        Les photos suivantes présentent différentes versions du gréément et des
                        flotteurs réalisés.
                    </p>

                    <p className="hidesmall">
                        Mode de visionnage :{" "}
                        <button
                            className="btn btn-outline-secondary btn-sm"
                            onClick={() => {
                                this.setState({ album: true });
                            }}
                        >
                            Album
                        </button>{" "}
                        ou{" "}
                        <button
                            className="btn btn-outline-secondary btn-sm"
                            onClick={() => {
                                this.setState({ album: false });
                            }}
                        >
                            Carousel
                        </button>
                    </p>
                    <br />

                    <div className="row">
                        {this.renderPictures()}
                    </div>
                    {this.renderLoadMore()}
                </div>
            </div>
        );
    }
}

Images.propTypes = {
    fetch_pictures_success: PropTypes.bool,
    fetch_pictures_done: PropTypes.bool,
    fetch_videos_success: PropTypes.bool,
    fetchPictures: PropTypes.func,
    fetchVideos: PropTypes.func,
    pictures: PropTypes.arrayOf(PropTypes.object),
    videos: PropTypes.arrayOf(PropTypes.object)
};

function mapStateToProps({ pictures, videos, success }) {
    return {
        pictures,
        videos,
        fetch_pictures_success: success.fetch_pictures_success,
        fetch_pictures_done: success.fetch_pictures_done,
        fetch_videos_success: success.fetch_videos_success
    };
}

export default connect(mapStateToProps, { fetchPictures, fetchVideos })(Images);
