import ReactDom from "react-dom";
import "./Donation.css";
import "./DonationButton.jsx";
import DonationForm from "./DonationForm.jsx";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function DonationModal({ open, children, onClose }) {
  if (!open) return null;
  return ReactDom.createPortal(
    <Modal
      show={open}
      backdrop="static"
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title>Thank you for choosing to donate.</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <DonationForm />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary">Save changes</Button>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>,
    document.getElementById("modal")
  );
}
