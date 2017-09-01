// Dependencies
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import moment from "moment";
moment.locale("fr");

import { fetchPictures } from "../../actions";
import style from "../../css/images.css";
import PictureBox from "../partials/pictureBox";
import PicturesCarousel from "../partials/picturesCarousel";

class Images extends Component {
    constructor() {
        super();

        this.state = {
            album: true
        };
    }

    componentDidMount() {
        this.props.fetchPictures();
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
                />
            );
        });
    }

    renderCarousel() {
        return <PicturesCarousel pictures={this.props.pictures} />;
    }

    renderPictures() {
        if (!this.props.success.fetch_success)
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

    render() {
        return (
            <div className={style} className="album">
                <h1>Vidéos</h1>

                <p>
                    Ce projet a commencé par la validation du concept grâce à des calculs complexes.
                    Puis a suivi la construction de prototypes de plus en plus avancés afin de
                    tester le concept en navigation. Les vidéos ci-dessous dressent un historique de
                    ces prototypes et présentent un virement sous différents angles.
                </p>
                <br />

                <div>
                    <p>Add videos</p>
                </div>

                <h1>Photos</h1>

                <p>
                    La série de photos suivante présente différentes versions du gréément et des
                    flotteurs réalisés.
                </p>

                <p>
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
            </div>
        );
    }
}

Images.propTypes = {
    pictures: PropTypes.arrayOf(PropTypes.object)
};

function mapStateToProps({ pictures, success }) {
    return { pictures, success };
}

export default connect(mapStateToProps, { fetchPictures })(Images);
