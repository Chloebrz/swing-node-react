// Dependencies
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Modal from "react-modal";

import { deletePicture } from "../../actions";

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

    renderIcons() {
        if (this.props.creator)
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

                    <Link to={`/admin/updatepicture/${this.props.id}`}>
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
                    <div className="col-md-5 order-md-2">
                        <h2 className="featurette-heading">
                            {this.props.name}
                        </h2>
                        <p className="lead">
                            {this.props.legend}
                        </p>
                        <p className="card-text">
                            Ajouté le : {this.props.date}
                        </p>

                        {this.renderIcons()}
                    </div>
                    <div className="col-md-7 order-md-1">
                        <img
                            className="featurette-image img-fluid mx-auto"
                            src={`data:${this.props.type};base64,${this.props.res}`}
                            alt={this.props.name}
                        />
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
    type: PropTypes.string,
    res: PropTypes.string,
    creator: PropTypes.bool
};

export default connect(null, { deletePicture })(PictureBox);
