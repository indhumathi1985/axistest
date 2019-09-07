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
    const { data } = await login(this.state.account.username);
    if (this.validateLogin(data[0])) {
      this.props.history.push(`/devices/${data[0].id}`);
    }
  }

  render() {
    return (
      <div className="container" style={this.renderStyle()}>
        <h5 style={{textAlign:"center",color:"#0000FF"}}>Login</h5>  
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
