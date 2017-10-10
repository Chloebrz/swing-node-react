// Dependencies
import React, { Component } from "react";
import Modal from "react-modal";
import PropTypes from "prop-types";

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

let DeleteModal = props => {
    const { isOpen, close, name, type, handleDeleteClick } = props;

    return (
        <Modal isOpen={isOpen} onRequestClose={close} style={customStyles} contentLabel="Modal">
            <h2 ref={subtitle => (subtitle = subtitle)}>Supprimer</h2>
            <p>
                Voulez-vous vraiment supprimer {type} : "{name}" ?
            </p>
            <form>
                <button className="btn btn-success" onClick={handleDeleteClick}>
                    Supprimer
                </button>
                <button className="btn btn-secondary right" onClick={close}>
                    Annuler
                </button>
            </form>
        </Modal>
    );
};

DeleteModal.propTypes = {
    isOpen: PropTypes.bool,
    close: PropTypes.func,
    name: PropTypes.string,
    type: PropTypes.string,
    handleDeleteClick: PropTypes.func
};

export default DeleteModal;
