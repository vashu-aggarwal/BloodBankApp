import React from "react";
import Form from "../../Components/Shared/Form/Form";
import "./Register.css";
import { useSelector } from "react-redux";
import Spinners from "../../Components/Shared/Spinners";

const Register = () => {
  const { loading, error } = useSelector((state) => state.auth);

  return (
    <>
      {error && <span>{alert(error)}</span>}
      {loading ? (
        <Spinners />
      ) : (
        <div className="register-container">
          <div className="register-image"></div>
          <div className="register-form-container">
            <div className="register-form">
              <h2>Btech 5th sem Project</h2>
              <Form
                formTitle={"Register"}
                submitBtn={"Register"}
                formType={"register"}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
