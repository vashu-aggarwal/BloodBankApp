import { React, useState } from "react";
import { useSelector } from "react-redux";
import InputType from "../Form/InputType";
import API from "../../../services/API";
import "./Model.css";

const Model = () => {
  const [inventoryType, setInventoryType] = useState("in");
  const [bloodGroup, setBloodGroup] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [donarEmail, setDonarEmail] = useState("");
  const { user } = useSelector((state) => state.auth);


  const handleModelSubmit = async () => {
    try {
      if (!bloodGroup || !quantity) {
        return alert("Please select all fields");
      }
      const { data } = await API.post("/inventory/create-inventory", {
        donarEmail,
        email: user?.email,
        organisation: user?._id,
        inventoryType,
        bloodGroup,
        quantity
      });

      if (data?.success) {
        alert("New Record created");
        window.location.reload();
      }
    } catch (error) {
      window.location.reload();
      console.log(error);
    }
  };
  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex={-1}
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              Manage Blood Record
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <div className="d-flex">
              Blood Type: &nbsp;
              <div className="form-check">
                <input
                  type="radio"
                  name="inRadio"
                  defaultChecked
                  value={"in"}
                  onChange={(e) => setInventoryType(e.target.value)}
                  className="form-check-input"
                />
                <label htmlFor="in" className="form-check-label">
                  IN
                </label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  name="inRadio"
                  value={"out"}
                  onChange={(e) => setInventoryType(e.target.value)}
                  className="form-check-input"
                />
                <label htmlFor="out" className="form-check-label">
                  OUT
                </label>
              </div>
            </div>
            <select
              className="CustomSelect"
              id="floatingSelect"
              aria-label="Floating label select example"
              onChange={(e) => setBloodGroup(e.target.value)}
            >
              <option selected>Open this select menu</option>
              <option value={"O+"}>O+</option>
              <option value={"O-"}>O-</option>
              <option value={"A+"}>A+</option>
              <option value={"A-"}>A-</option>
              <option value={"B+"}>B+</option>
              <option value={"B-"}>B-</option>
              <option value={"AB+"}>AB+</option>
              <option value={"AB-"}>AB-</option>
            </select>
            <InputType
              labelText={"Donar Email"}
              labelFor={"donarEmail"}
              inputType={"email"}
              value={donarEmail}
              onChange={(e) => setDonarEmail(e.target.value)}
            />
            <InputType
              labelText={"Quantity(ml)"}
              labelFor={"quantity"}
              inputType={"Number"}
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value) || 0)}
            />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="SubmitButton btn btn-custom"
              onClick={handleModelSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model;
