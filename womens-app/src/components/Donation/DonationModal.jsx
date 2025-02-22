import ReactDom from "react-dom";
import "./DonationButton.css";
import "./DonationButton.jsx";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
export default function DonationModal({ open, children, onClose }) {
  if (!open) return null;
  //   return ReactDom.createPortal(
  //     <div classNameName="modal">
  //       <button onClick={onClose}>Close</button>
  //       {children}
  //     </div>,
  //     document.getElementById("modal")
  //   );
  return ReactDom.createPortal(
    // <div className="modal" tabIndex={-1}>
    //   <div className="modal-dialog">
    //     <div className="modal-content">
    //       <div className="modal-header">
    //         <h5 className="modal-title">Modal title</h5>
    //         <button
    //           type="button"
    //           className="btn-close"
    //           data-bs-dismiss="modal"
    //           aria-label="Close"
    //         ></button>
    //       </div>
    //       <div className="modal-body">{children}</div>
    //       <div className="modal-footer">
    //         <button
    //           type="button"
    //           className="btn btn-secondary"
    //           data-bs-dismiss="modal"
    //           onClick={onClose}
    //         >
    //           Close
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>,
    // document.getElementById("modal")
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>Sample Modal Heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>This is the sample text for our Modal</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary">Save changes</Button>
        <Button variant="secondary">Close</Button>
      </Modal.Footer>
    </Modal.Dialog>,
    document.getElementById("modal")
  );
}
