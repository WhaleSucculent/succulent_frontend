import React from "react";
import "css/style.scss";
import "css/app.scss";

import Header from "./Header";

const RegisterPage = () => {
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
              <span className="icon is-small is-right">
                <i className="fas fa-check"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <label className="label">Re-Password</label>
            <p className="control has-icons-left">
              <input
                className="input"
                type="password"
                placeholder="Re-Password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check"></i>
              </span>
            </p>
          </div>

          <div className="control">
            <button className="button is-fullwidth is-link">Regrist</button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default RegisterPage;
