import { Modal } from "react-bootstrap";
import BootstrapInput from "../../material-ui/bootstrapInput";

export function Example({ show, setShow, type }) {
  return (
    <>
      <Modal
        size="lg"
        show={show}
        onHide={() => setShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            {type} Cost
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <BootstrapInput
            data={{ label: type, placeholder: "Enter " + type }}
          />
          <button
            className="btn-primary btn-md"
            style={{
              marginTop: "15px",
              marginLeft: "10px",
              borderRadius: "8px",
            }}
          >
            Sumbit
          </button>
        </Modal.Body>
      </Modal>
    </>
  );
}
