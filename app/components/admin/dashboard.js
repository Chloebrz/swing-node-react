// Dependencies
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchPictures } from "../../actions";
import PictureBox from "./pictureBox";
import style from "../../css/dashboard.css";

class Dashboard extends Component {
    componentDidMount() {
        this.props.fetchPictures();
    }

    renderPictures() {
        return this.props.pictures.map(picture => {
            return (
                <PictureBox
                    id={picture._id}
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
            <div className={style}>
                <h1>Dashboard</h1>
                <Link className="btn btn-primary" role="button" to="/admin/addpicture">
                    Nouveau
                </Link>

                {this.renderPictures()}
            </div>
        );
    }
}

function mapStateToProps({ pictures }) {
    return { pictures };
}

export default connect(mapStateToProps, { fetchPictures })(Dashboard);
