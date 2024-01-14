import React from "react";
import { Modal, Button } from "react-bootstrap";
import "./Modal.css";

// InfoModal component takes 'show' and 'handleClose' as props
const InfoModal = ({ show, handleClose }) => {
  return (
    <>
      {/* Conditionally render a modal overlay when 'show' is true */}
      {show && <div className="modal-overlay"></div>}

      {/* Bootstrap Modal component with custom styling */}
      <Modal show={show} onHide={handleClose} className="custom-modal">
        <Modal.Header>
          {/* Title for the modal */}
          <Modal.Title className="modal-title">Shipping</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          {/* Body content explaining shipping methods */}
          <p>
            Express - 1 to 3 day shipping.
            <br />
            <br />
            Standard - 3 to 5 day shipping.
            <br />
            <br />
            Once your products have been selected and a shipping method has been
            selected the price wil automatically update with the provided
            amount.
          </p>
        </Modal.Body>
        <Modal.Footer className="modal-footer">
          {/* Close button in the footer */}
          <Button
            className="close-btn"
            variant="secondary"
            onClick={handleClose}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default InfoModal;
