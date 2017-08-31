// Dependencies
import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import PropTypes from "prop-types";
import moment from "moment";
moment.locale("fr");

class PicturesCarousel extends Component {
    renderPictures() {
        return this.props.pictures.map(picture => {
            return (
                <div key={picture._id}>
                    <img src={`data:${picture.img.contentType};base64,${picture.img.res}`} />
                    <div className="legend">
                        <p className="legend-text">
                            {picture.legend}
                        </p>
                        <p className="legend-date">
                            Ajouté le : {moment(picture.createdAt).format("D MMMM YY")}
                        </p>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <Carousel infiniteLoop={true} showStatus={false} dynamicHeight={true}>
                {this.renderPictures()}
            </Carousel>
        );
    }
}

PicturesCarousel.propTypes = {
    pictures: PropTypes.arrayOf(PropTypes.object)
};

export default PicturesCarousel;
