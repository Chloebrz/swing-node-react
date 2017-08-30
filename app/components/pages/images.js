// Dependencies
import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchPictures } from "../../actions";
import style from "../../css/images.css";
import PictureBox from "../partials/pictureBox";

class Images extends Component {
    componentDidMount() {
        this.props.fetchPictures();
    }

    renderPictures() {
        return this.props.pictures.map(picture => {
            return (
                <PictureBox
                    key={picture._id}
                    name={picture.name}
                    type={picture.img.contentType}
                    res={picture.img.res}
                    legend={picture.legend}
                />
            );
        });
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
                <br />

                <div className="row">
                    {this.renderPictures()}
                </div>
            </div>
        );
    }
}

function mapStateToProps({ pictures }) {
    return { pictures };
}

export default connect(mapStateToProps, { fetchPictures })(Images);
