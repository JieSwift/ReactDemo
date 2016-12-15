import React from 'react';

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick} className="btn btn-success">
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick} className="btn btn-danger">
      Logout
    </button>
  );
}

export default class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isLoggedIn:false
    };
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogOutClick = this.handleLogOutClick.bind(this);
  }
  handleLoginClick(){
    this.setState({isLoggedIn:true});
  }
  handleLogOutClick(){
    this.setState({isLoggedIn:false});
    console.log(this.state.isLoggedIn);
  }
  render(){
    const isLoggedIn = this.state.isLoggedIn;
    let button = null;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }
    return(
        <div>
          <Greeting isLoggedIn={isLoggedIn} />
          {button}
        </div>
      );
  }
}
