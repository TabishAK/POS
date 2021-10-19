import React, { useState } from "react";
import "../CSS/leftDiv.css";
import SelectInput from "../material-ui/selectInput";
import SearchInput from "../material-ui/searchInput";
import StandardInput from "../material-ui/standardInput";
import FontAwesome from "react-fontawesome";
import { Example } from "../components/Modals/orderModal";

const SelectionDiv = () => {
  const [show, setShow] = useState(false);
  const [type, setType] = useState("");

  return (
    <React.Fragment>
      <Example setShow={(e) => setShow(e)} show={show} type={type} />

      <div className="item-1">
        <SelectInput
          drpoDownData={{
            dropdown: [
              { cName: "Pakistan" },
              { cName: "USA" },
              { cName: "UK" },
              { cName: "India" },
            ],
            InputName: "Country Name *",
            helperText: "Select your country name",
            width: "35ch",
          }}
        />
        <SearchInput
          configure={{
            isButton: false,
            placeHolder: "Select Biller",
            text: "Please select your biller",
            width: 350,
          }}
        />
      </div>
      <div className="item-2">
        <SearchInput
          configure={{
            isButton: true,
            placeHolder: "Select Customer",
            text: "Please select your customer",
            width: 280,
          }}
        />
        <StandardInput />
      </div>

      <div className="item-3">
        <ul className="list-category">
          <li>Product</li>
          <li>Price</li>
          <li>Quantity</li>
          <li>Sub-Total</li>
          <li></li>
        </ul>
      </div>

      <div className="item-4">
        <ul class="list-info">
          <li>
            Item
            <span>0.00</span>
          </li>

          <li>
            Total<span>0.00</span>
          </li>
          <li>
            <div>
              Discount{" "}
              <FontAwesome
                style={{ cursor: "pointer" }}
                name="edit"
                onClick={() => {
                  setType("Discount");
                  setShow(true);
                }}
              />
            </div>
            <span>0.00</span>
          </li>
          <li>
            <div>
              Coupon{" "}
              <FontAwesome
                style={{ cursor: "pointer" }}
                name="edit"
                onClick={() => {
                  setType("Coupen");
                  setShow(true);
                }}
              />
            </div>
            <span>0.00</span>
          </li>
          <li>
            <div>
              Tax{" "}
              <FontAwesome
                style={{ cursor: "pointer" }}
                name="edit"
                onClick={() => {
                  setType("Tax");
                  setShow(true);
                }}
              />
            </div>
            <span>0.00</span>
          </li>
          <li>
            <div>
              Shipping{" "}
              <FontAwesome
                style={{ cursor: "pointer" }}
                name="edit"
                onClick={() => {
                  setType("Shipping");
                  setShow(true);
                }}
              />
            </div>
            <span>0.00</span>
          </li>
          <li>
            Grand Total<span>0.00</span>
          </li>
        </ul>
      </div>

      <div className="btn-panel container-fluid">
        <div className="row">
          <div className="col-md-3">
            <button className="btn-lg" style={{ backgroundColor: "#0066cc" }}>
              <FontAwesome
                className="mr-2"
                style={{ cursor: "pointer" }}
                name="credit-card"
              />{" "}
              Card
            </button>
          </div>
          <div className="col-md-3">
            <button className="btn-lg" style={{ backgroundColor: "#47d147" }}>
              <FontAwesome
                className="mr-2"
                style={{ cursor: "pointer" }}
                name="money"
              />{" "}
              Cash
            </button>
          </div>
          <div className="col-md-3">
            <button className="btn-lg" style={{ backgroundColor: "#6666ff" }}>
              <FontAwesome
                className="mr-2"
                style={{ cursor: "pointer" }}
                name="paypal"
              />
              Paypal
            </button>
          </div>
          <div className="col-md-3">
            <button className="btn-lg" style={{ backgroundColor: "#e28d02" }}>
              <FontAwesome
                className="mr-2"
                style={{ cursor: "pointer" }}
                name="suitcase"
              />
              Draft
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 mt-3">
            <button className="btn-lg" style={{ backgroundColor: "#163951" }}>
              <FontAwesome
                className="mr-2"
                style={{ cursor: "pointer" }}
                name="map-o"
              />{" "}
              Cheque
            </button>
          </div>
          <div className="col-md-3 mt-3">
            <button className="btn-lg" style={{ backgroundColor: "#800080" }}>
              <FontAwesome
                className="mr-2"
                style={{ cursor: "pointer" }}
                name="gift"
              />{" "}
              Gift Card
            </button>
          </div>
          <div className="col-md-3 mt-3">
            <button className="btn-lg" style={{ backgroundColor: "#7f4f01" }}>
              <FontAwesome
                className="mr-2"
                style={{ cursor: "pointer" }}
                name="hand-lizard-o"
              />{" "}
              Deposit
            </button>
          </div>
          <div className="col-md-3 mt-3">
            <button className="btn-lg" style={{ backgroundColor: "#cc0000" }}>
              <FontAwesome
                className="mr-2"
                style={{ cursor: "pointer" }}
                name="times"
              />{" "}
              Cancel
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SelectionDiv;
