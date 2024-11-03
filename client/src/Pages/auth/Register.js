import React from "react";
import Form from "../../Components/Shared/Form/Form";
import "./Register.css";
const Register = () => {
  return (
    <>
      <div className="register-container">
        <div className="register-image"></div>
        <div className="register-form-container">
          <div className="register-form">
            <h2>Btech 5th sem Project</h2>
            <Form formTitle={"Register"} submitBtn={"Register"} formType={'register'}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
