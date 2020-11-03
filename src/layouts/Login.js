import React from "react";
import '../assets/scss/login-signup.css'

const Login = () => {

  const [providerPage, setProviderPage] = React.useState(false)
  const [rightPanel, setRightPanel] = React.useState(false)

  const renderPatientSignUp = () => {
    return (
      <form action="#">
        <h2>Create Patient Account</h2>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Organization" />
            <input type="password" placeholder="Password" /><br/>
            <button>Sign Up</button>
      </form>
    )
  }

  const renderProviderSignUp = () => {
    return (
      <form action="#">
        <h2>Create Provider Account</h2>
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Organization" />
              <input type="text" placeholder="Individual NPI Number" />
              <input type="password" placeholder="Password" /><br/>
              <button>Sign Up</button>
      </form>
    )
  }

  return (
    <>
      <div className={'login-signup-container' + (rightPanel ? " right-panel-active" : '')} id="container">
	    <div className="form-container sign-up-container">
        {providerPage 
          ? renderProviderSignUp()
          : renderPatientSignUp()}
	    </div>
        <div className="form-container sign-in-container">
            <form action="#">
                <h2>{providerPage ? 'Provider' : 'Patient'} Sign in</h2>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <a href="#">Forgot your password?</a>
                <button>Sign In</button>
            </form>
        </div>
        <div className="overlay-container">
            <div className="overlay">
                <div className="overlay-panel overlay-left">
                    <h1>Welcome Back!</h1>
                    <p>To keep connected with us please login with your personal info</p>
                    <button className="ghost" id="signIn" onClick={()=> setRightPanel(false)}>Sign In</button><br/>
                    <button className="ghost" id="signIn" onClick={()=> setProviderPage(!providerPage)}>Click here for {providerPage ? 'Patients' : 'Providers'}</button>
                </div>
                <div className="overlay-panel overlay-right">
                    <h1>Hello, Friend!</h1>
                    <p>Enter your personal details and start journey with us</p>
                    <button className="ghost" id="signUp" onClick={()=> setRightPanel(true)}>Sign Up</button><br/>
                    <button className="ghost" id="signIn" onClick={()=> setProviderPage(!providerPage)}>Click here for {providerPage ? 'Patients' : 'Providers'}</button>
                </div>
            </div>
        </div>
        </div>
    </>
  );
};

export default Login;
