import React, {useState, useEffect} from "react";
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllOrganizations } from '../actions/organizationActions';
import { createPatientProfile, patientLogin, handlePatientPersist } from '../actions/patientActions';
import { createProviderProfile, providerLogin, handleProviderPersist } from '../actions/providerActions';
import uuid from 'react-uuid';
import '../assets/scss/login-signup.css'

const Login = () => {
  // redux hooks
  const state = useSelector(state => state)
  const dispatch = useDispatch()

  // redirects
  const history = useHistory();
  if (localStorage.patientToken && localStorage.patientToken != "undefined"){
    dispatch(handlePatientPersist())
    history.push('/patient')
  }

  if (localStorage.providerToken && localStorage.providerToken != "undefined"){
    dispatch(handleProviderPersist())
    history.push('/provider')
  }

  // useEffect
  useEffect(()=> {
    dispatch(fetchAllOrganizations())
  }, [])

  // handles slide feature
  const [providerPage, setProviderPage] = useState(false)
  const [rightPanel, setRightPanel] = useState(false)

  // handles login input changes
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')

  // handles signup input changes
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [signUpEmail, setSignUpEmail] = useState('')
  const [organization, setOrganization] = useState('')
  const [signUpPassword, setSignUpPassword] = useState('')
  const [npiNumber, setNPINumber] = useState('')

  // renders org drop down for sign up forms
  const renderOrgDropDown = () => {
    return state.organizations.map(org => {
      return <option value={org.id} key={org.id}>{org.name}</option>
    })
  }

  // sign up forms
  const renderPatientSignUp = () => {
    return (
      <form className='login-signin-form' onSubmit={(e) => handleSignUpSubmit(e, 'patient')}>
        <h2>Create Patient Account</h2>
            <input className='login-signup-input' type="text" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)}/>
            <input className='login-signup-input' type="text" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)}/>
            <input className='login-signup-input' type="email" placeholder="Email" onChange={(e) => setSignUpEmail(e.target.value)}/>
            <select className='login-signup-input' type="select" placeholder="Organization" onChange={(e) => setOrganization(e.target.value)} defaultValue='n/a'>
              <option value='n/a' disabled>Organization</option>
              {renderOrgDropDown()}
            </select>
            <input className='login-signup-input' type="password" placeholder="Password" onChange={(e) => setSignUpPassword(e.target.value)}/><br/>
            <button className='login-signin-button'>Sign Up</button>
      </form>
    )
  }

  const renderProviderSignUp = () => {
    return (
      <form className='login-signin-form' onSubmit={(e) => handleSignUpSubmit(e, 'provider')}>
        <h2>Create Provider Account</h2>
        <input className='login-signup-input' type="text" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)}/>
            <input className='login-signup-input' type="text" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)}/>
            <input className='login-signup-input' type="email" placeholder="Email" onChange={(e) => setSignUpEmail(e.target.value)}/>
            <select className='login-signup-input' type="select" placeholder="Organization" onChange={(e) => setOrganization(e.target.value)} defaultValue='n/a'>
              <option value='n/a' disabled>Organization</option>
              {renderOrgDropDown()}
            </select>
            <input className='login-signup-input' type="password" placeholder="Password" onChange={(e) => setSignUpPassword(e.target.value)}/>
            <input className='login-signup-input' type="number" placeholder="NPI Number" onChange={(e) => setNPINumber(e.target.value)}/><br/>
            <button className='login-signin-button'>Sign Up</button>
      </form>
    )
  }

  // create patient or provider
  const handleSignUpSubmit = (e, user) => {
    e.preventDefault()
    if (user === 'patient') {
      let formData = {
        first_name: firstName, 
        last_name: lastName, 
        email_address: signUpEmail, 
        organization_id: organization, 
        password: signUpPassword,
        patient_uuid: uuid()
      }
      dispatch(createPatientProfile(formData))
    } else if (user === 'provider') {
      let formData = {
        first_name: firstName, 
        last_name: lastName, 
        email_address: signUpEmail, 
        organization_id: organization, 
        password: signUpPassword,
        NPI_number: npiNumber,
        provider_uuid: uuid()
      }
      dispatch(createProviderProfile(formData))
    }
  }

  // login feature
  const handleLoginSubmit = (e) => {
    e.preventDefault()
    let formData = {
      email_address: loginEmail, 
      password: loginPassword,
    }
    if (providerPage) {
      dispatch(providerLogin(formData))
    } else {
      dispatch(patientLogin(formData))
    }
  }

  return (
    <div className='login-signup-div'>
      <div className={'login-signup-container' + (rightPanel ? " right-panel-active" : '')} id="container">
	    <div className="form-container sign-up-container">
        {providerPage 
          ? renderProviderSignUp()
          : renderPatientSignUp()}
	    </div>
        <div className="form-container sign-in-container">
            <form className='login-signin-form' onSubmit={handleLoginSubmit}>
                <h2>{providerPage ? 'Provider' : 'Patient'} Sign in</h2>
                <input className='login-signup-input' type="email" placeholder="Email" onChange={(e) => setLoginEmail(e.target.value)}/>
                <input className='login-signup-input' type="password" placeholder="Password" onChange={(e) => setLoginPassword(e.target.value)}/>
                <a className='a-link' href="#">Forgot your password?</a>
                <button className='login-signin-button'>Sign In</button>
            </form>
        </div>
        <div className="overlay-container">
            <div className="overlay">
                <div className="overlay-panel overlay-left">
                    <h1>Hello, Friend!</h1>
                    <p className="login-signin-p">Enter your personal details and start your journey with us</p>
                    <button className="login-signin-button ghost" id="signIn" onClick={()=> setRightPanel(false)}>Sign In</button><br/>
                    <button className="login-signin-button ghost" id="signIn" onClick={()=> setProviderPage(!providerPage)}>Click here for {providerPage ? 'Patients' : 'Providers'}</button>
                </div>
                <div className="overlay-panel overlay-right">
                    <h1>Welcome Back!</h1>
                    <p className="login-signin-p">To keep connected with us, please login with your personal credentials</p>
                    <button className="login-signin-button ghost" id="signUp" onClick={()=> setRightPanel(true)}>Sign Up</button><br/>
                    <button className="login-signin-button ghost" id="signIn" onClick={()=> setProviderPage(!providerPage)}>Click here for {providerPage ? 'Patients' : 'Providers'}</button>
                </div>
            </div>
        </div>
        </div>
    </div>
  );
};

export default Login;
