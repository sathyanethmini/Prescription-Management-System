import { Modal, Button } from "react-bootstrap";

function UserViewModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      scrollable={true}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title} : {props.code}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <p className="font-weight-bold">Confirmation Document</p>
          <img src={props.data.confirmationFileUrl}  alt="Confirmation Image"  style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}/>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default UserViewModal;
