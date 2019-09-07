import React from "react";
import Input from "../../common/input";
import Form from "../../common/form";
import { login } from "../../services/loginService";

class LoginComponent extends Form {
  state = {
    account: { username: "", password: "" },
    errors: {}
  };

  async doSubmit() {
      const users = await login(this.state.account.username);
      if(this.validateLogin(users)) {
        this.props.history.push(`/devices/${users.data[0].username}`);
      };
  }

  render() {
    const pStyle = {
      backgroundColor: "#F7F9F9",
      width: "50%",
      top: "25%",
      left: "25%",
      position: "absolute",
      padding: "5%"
    };
    return (
      <div className="container" style={pStyle}>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={this.state.account.username}
            label="Username"
            type="text"
            onChange={this.handleChange}
            error={this.state.errors.username}
          />
          <Input
            name="password"
            value={this.state.account.password}
            label="Password"
            type="password"
            onChange={this.handleChange}
            error={this.state.errors.password}
          />
          <div>{this.renderButton("Login")}</div>
        </form>
      </div>
    );
  }
}

export default LoginComponent;
