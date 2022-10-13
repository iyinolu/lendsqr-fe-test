import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CButton, CFormInput, CInputGroup, CImage } from '@coreui/react'
import loginIllustration from '../../../assets/images/pablo-sign-in.png'
import lendsqrlogo from '../../../assets/brand/lendsqr-logo.png'

const Login = () => {
  const navigate = useNavigate()
  return (
    <div className="min-vh-100 vh-100">
      <div className="d-grid login-container">
        <div className="illustration">
          <div className="logo-container">
            <CImage aria-label="lendsqr logo" src={lendsqrlogo} />
          </div>
          <CImage id="illustration-img" src={loginIllustration} />
        </div>
        <div className="form-container">
          <div>
            <h1 id="welcome" aria-label="Welcome!">
              Welcome!
            </h1>
            <p id="instruction" aria-label="Enter details to login">
              Enter details to Login.
            </p>
            <form aria-label="Login form" className="login-form">
              <CInputGroup className="mb-3">
                <CFormInput type="email" placeholder="Email" autoComplete="username" />
              </CInputGroup>
              <CInputGroup className="mb-3 mt-4">
                <CFormInput type="password" placeholder="Password" autoComplete="password" />
              </CInputGroup>
              <a href="#/login" aria-label="Forgot password" className="mt-4 forgot-password">
                FORGOT PASSWORD
              </a>
              <CButton onClick={() => navigate('/users')} className="login-btn login-cta-btn">
                LOG IN
              </CButton>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Login)
