// Dependencies
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPictures } from "../../actions";

class Dashboard extends Component {
    componentDidMount() {
        this.props.fetchPictures();
    }

    renderPictures() {
        return this.props.pictures.map(picture => {
            return (
                <div key={picture._id}>
                    <img src={`data:${picture.img.contentType};base64,${picture.img.res}`} />
                    <p>
                        {picture.legend}
                    </p>
                </div>
            );
        });
    }

    render() {
        return (
            <div>
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
