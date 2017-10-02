// Dependencies
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Modal from "react-modal";

import { deletePicture } from "../../actions/pictures";

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)"
    }
};

class PictureBox extends Component {
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
        this.props.deletePicture({ id: this.props.id });
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
                    src={require("../../images/icons/delete.png")}
                    onClick={this.openModal}
                />
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Modal"
                >
                    <h2 ref={subtitle => (this.subtitle = subtitle)}>Supprimer</h2>
                    <p>
                        Voulez-vous vraiment supprimer l'image : "{this.props.name}" ?
                    </p>
                    <form>
                        <button
                            className="btn btn-success"
                            onClick={this.handleDeleteClick.bind(this)}
                        >
                            Supprimer
                        </button>
                        <button className="btn btn-secondary right" onClick={this.closeModal}>
                            Annuler
                        </button>
                    </form>
                </Modal>

                <Link to={`/admin/update_picture/${this.props.id}`}>
                    <img
                        className="icon icon-clickable"
                        src={require("../../images/icons/edit.png")}
                    />
                </Link>
            </div>
        );
    }

    render() {
        return (
            <div>
                <hr className="featurette-divider" />
                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading hidelarge">
                            {this.props.name}
                        </h2>
                        <img
                            className="featurette-image img-fluid mx-auto"
                            src={`data:${this.props.type};base64,${this.props.res}`}
                            alt={this.props.name}
                        />
                    </div>
                    <div className="col-md-5">
                        <h2 className="featurette-heading hidesmall">
                            {this.props.name}
                        </h2>
                        <p className="lead">
                            {this.props.legend}
                        </p>
                        <p className="card-text">
                            Ajouté le : {this.props.date} par {this.renderCreatorLink()}
                        </p>

                        {this.renderIcons()}
                    </div>
                </div>
            </div>
        );
    }
}

PictureBox.propTypes = {
    deletePicture: PropTypes.func,
    id: PropTypes.string,
    name: PropTypes.string,
    legend: PropTypes.string,
    date: PropTypes.string,
    type: PropTypes.string,
    res: PropTypes.string,
    isCreator: PropTypes.bool,
    creator: PropTypes.string,
    creatorId: PropTypes.string
};

export default connect(null, { deletePicture })(PictureBox);
