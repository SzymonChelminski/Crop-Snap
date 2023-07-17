import React from 'react'

function Cognito(props: any) {

  return (
    <div className='cognito__container' style={{top: props.cognitoDisplay}}>
        <div className='cognito__carousel__container'>
        <div className='cognito__page cognito__signIn'>
            <form onSubmit={props.HandleonSubmitSignIn}>
            <h1>Sign in</h1>
            <p>Email:</p>
            <input type="text"
                onChange={props.handleOnchangeMailSignIn}
                value={props.valueEmailSignIn}
            />
            <p>Password:</p>
            <input type="text"
                onChange={props.handleOnchangePasswordSignIn}
                value={props.valuePasswordSignIn}
            />
            {props.errorMessageSignIn !== 'dziala' && <span className='error__message'>{props.errorMessageSignIn}</span>}
            <div className='buttons__container'>
                <i className="fa-solid fa-xmark" onClick={props.handleCognitoClose}></i>
                <button type="submit">
                    <i className="fa-solid fa-arrow-right" onClick={props.handleCarouselSignIn}></i>
                </button>
            </div>
            </form>
        </div>
        <div className='cognito__page cognito__verify'>
            <form onSubmit={props.handleOnSubmitVerify}>
            <p>A veryfing code was sent to your email, paste it in here.</p>
            <input type="text"
                onChange={props.handleOnChangeVerify}
                value={props.valueVerify}
            />
            {props.errorMessageVerify !== 'dziala' && <span className='error__message'>{props.errorMessageVerify}</span>}
            <div className='buttons__container'>
                <i className="fa-solid fa-xmark" onClick={props.handleCognitoClose}></i>
                <button type="submit">
                    <i className="fa-solid fa-arrow-right" onClick={props.handleCarouselVerify}></i>
                </button>
            </div>
            </form>
        </div>
        <div className='cognito__page cognito__login'>
            <form onSubmit={props.handleOnSubmitLogin}>
            <h1>Login</h1>
            <p>Email:</p>
            <input type="text" 
                onChange={props.handleOnChangeMailLogin}
                value={props.valueMailLogin}
            />
            <p>Password:</p>
            <input type="text"
                onChange={props.handleOnChangePasswordLogin}
                value={props.valuePasswordLogin}
            />
            {props.errorMessageLogin !== 'dziala' && <span className='error__message'>{props.errorMessageLogin}</span>}
            <div className='buttons__container'>
                <i className="fa-solid fa-xmark" onClick={props.handleCognitoClose}></i>
                <button type="submit">
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
            </form>
        </div>
        </div>
    </div>
  )
}

export default Cognito