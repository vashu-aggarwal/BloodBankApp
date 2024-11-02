import React from 'react'
import Form from '../../Components/Shared/Form/Form'
import './Register.css'
const Register = () => {
  return (
    <>
      <div className="register-container d-flex align-items-center justify-content-center vh-100">
      <div className="register-form text-center p-4 rounded">
      <h2>Btech 5th Sem Project</h2>
        <div className="RegisterForm">
          <Form formTitle={'Register'} submitBtn={'Register'}/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Register
