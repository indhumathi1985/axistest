import React from "react";
import Form from "../../common/form";
import { login } from "../../services/loginService";

class LoginComponent extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {}
  };

  async doSubmit() {
    const { data } = await login(this.state.data.username);
    if (this.validateLogin(data[0])) {
      this.props.history.push(`/devices/${data[0].id}`);
    }
  }

  render() {
    return (
      <div className="container" style={this.renderStyle()}>
        <h5 style={{ textAlign: "center", color: "#0000FF" }}>Login</h5>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username", "text")}
          {this.renderInput("password", "Password", "password")}
          <div>{this.renderButton("Login")}</div>
        </form>
      </div>
    );
  }

  renderStyle() {
    return {
      backgroundColor: "#F7F9F9",
      width: "30%",
      marginTop: "10%",
      padding: "3%"
    };
  }
}

export default LoginComponent;
