import React from "react";
import "./Login.css";
import Form from "../../Components/Shared/Form/Form";
import { useSelector } from "react-redux";
import Spinners from "../../Components/Shared/Spinners";
const Login = () => {
  const { loading, error } = useSelector((state) => state.auth);

  return (
    <>
      {error && <span>{alert(error)}</span>}
      {loading ? (
        <Spinners />
      ) : (
        <div className="login-container d-flex align-items-center justify-content-center vh-100">
          <div className="login-form text-center p-4 rounded">
            <h2>Btech 5th Sem Project</h2>
            <div className="LoginForm">
              <Form
                formTitle={"Login"}
                submitBtn={"Login"}
                formType={"login"}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
