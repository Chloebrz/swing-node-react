// Dependencies
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { deleteVideo } from "../../../actions/videos";
import DeleteModal from "../modals/deleteModal";
import styles from "../../../css/elements/featurette.css";

class VideoBox extends Component {
    constructor() {
        super();

        this.state = { modalIsOpen: false };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({ modalIsOpen: true });
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    handleDeleteClick() {
        this.props.deleteVideo({ id: this.props.id });
    }

    renderCreatorLink() {
        if (this.props.isCreator) return <Link to={"/admin/profile"}>Moi</Link>;

        return (
            <Link to={`/profile/${this.props.creatorId}`}>
                {this.props.creator}
            </Link>
        );
    }

    renderIcons() {
        if (!this.props.isCreator) return;

        return (
            <div>
                <img
                    className="icon icon-clickable"
                    src={require("../../../images/icons/delete.png")}
                    onClick={this.openModal}
                />

                <DeleteModal
                    isOpen={this.state.modalIsOpen}
                    close={this.closeModal}
                    type="la vidéo"
                    name={this.props.name}
                    handleDeleteClick={this.handleDeleteClick.bind(this)}
                />

                <Link to={`/admin/update_video/${this.props.id}`}>
                    <img
                        className="icon icon-clickable"
                        src={require("../../../images/icons/edit.png")}
                    />
                </Link>
            </div>
        );
    }

    render() {
        return (
            <div className={styles}>
                <hr className="featurette-divider" />
                <div className="featurette">
                    <h2 className="featurette-heading">
                        {this.props.name}
                    </h2>
                    <video controls>
                        <source src={`/assets/uploads/${this.props.url}`} type={this.props.type} />
                        Votre navigateur ne supporte pas ces types de vidéos.
                    </video>
                    <p className="lead">
                        {this.props.legend}
                    </p>
                    <p className="featurette-text">
                        Ajouté le : {this.props.date}
                    </p>
                    {this.renderIcons()}
                </div>
            </div>
        );
    }
}

VideoBox.propTypes = {
    deleteVideo: PropTypes.func,
    id: PropTypes.string,
    name: PropTypes.string,
    legend: PropTypes.string,
    date: PropTypes.string,
    url: PropTypes.string,
    type: PropTypes.string,
    isCreator: PropTypes.bool,
    creatorId: PropTypes.string
};

export default connect(null, { deleteVideo })(VideoBox);
