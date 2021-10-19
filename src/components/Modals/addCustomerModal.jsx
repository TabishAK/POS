import { Modal } from "react-bootstrap";
import SelectInput from "../../material-ui/selectInput";
import BootstrapInput from "../../material-ui/bootstrapInput";

export function Example({ show, setShow }) {
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
            Add Customer
          </Modal.Title>
        </Modal.Header>
        <i style={{ fontWeight: 100 }} className="ml-3 mt-3">
          The field labels marked with * are required input fields.
        </i>
        <Modal.Body>
          <SelectInput
            drpoDownData={{
              dropdown: [{ cName: "gug" }, { cName: "xyz" }],
              InputName: "Customer Group *",
              helperText: "Select the customer group",
              width: "50ch",
            }}
          />
          <BootstrapInput
            data={{ label: "Name*", placeholder: "Your name here." }}
          />
          <BootstrapInput
            data={{ label: "E-mail*", placeholder: "example@example.com." }}
          />
          <BootstrapInput
            data={{ label: "Phone-no*", placeholder: "Your contact here." }}
          />
          <BootstrapInput
            data={{ label: "Address*", placeholder: "Your residential." }}
          />
          <BootstrapInput
            data={{ label: "City*", placeholder: "Your city here" }}
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
