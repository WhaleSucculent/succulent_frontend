import React from "react";
import "css/style.scss";
import "css/app.scss";

import Header from "./Header";

import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React from "react";
import ReactDOM from "react-dom";
// import Login from './component/Login';
// import '../css/style.scss';

// import '../css/app.scss';
import "css/style.scss";
import "css/app.scss";

import Header from "./Header";

class RegisterPage extends React.Component {
  msg = "Clicked";

  state = {
    email: "",
    password: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.props.history.push("/");
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="login-wrapper">
          <form className="box login-box" onSubmit={this.handleSubmit}>
            <div className="field">
              <label className="label">Email</label>
              <p className="control has-icons-left has-icons-right">
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
                <input
                  className="input"
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
                <span className="icon is-small is-right">
                  <i className="fas fa-check"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <p className="control has-icons-left">
                <input
                  className="input"
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-lock"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <label className="label">Re-enter Password</label>
              <p className="control has-icons-left">
                <input
                  className="input"
                  type="password"
                  placeholder="Re-enter Password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-lock"></i>
                </span>
              </p>
            </div>

            <div className="control">
              <button className="button is-fullwidth is-link">Login</button>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default RegisterPage;
