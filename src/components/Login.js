import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
    this.handleChangeEmail = this.handleChangeEmail.bind(this)
    this.handleChangePassword = this.handleChangePassword.bind(this)

    this.state = {
      email: '',
      password: '',
      enableSubmit: false
    };
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    this.props.logIn(this.state.email, this.state.password)
  }

  handleChangeEmail(event) {
    this.setState({
      email: event.target.value
    }, () => {
      if (this.state.email !== '' && this.state.password !== '') {
        this.setState({
          enableSubmit: true
        })
      }
    })
  }

  handleChangePassword(event) {
    this.setState({
      password: event.target.value
    }, () => {
      if (this.state.email !== '' && this.state.password !== '') {
        this.setState({
          enableSubmit: true
        })
      }
    })
  }

  render() {
    return (
      <div className="login-wrapper">
        <form onSubmit={this.handleLoginSubmit}>
          <h1>Login</h1>
          <label htmlFor="fname" >
            Email:
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email@email.com"
            value={this.state.email}
            onChange={this.handleChangeEmail}
          />
          <label htmlFor="lname" >
            Password:
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChangePassword}
          />
          <button type='submit' disabled={!this.state.enableSubmit}>Login</button>
        </form>
      </div>
    );
  }
}

export default Login;