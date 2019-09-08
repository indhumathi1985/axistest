import React, { Component } from "react";

class Form extends Component {
  state = {
    data: {},
    errors: {}
  };

  validate = () => {
    const errors = {};
    const { account } = this.state;
    if (account.username.trim() === "")
      errors.username = "Username is required";
    if (account.password.trim() === "")
      errors.password = "Password is required";

    return Object.keys(errors).length === 0 ? null : errors;
  };

  validateProperty = ({ name, value }) => {
    if (name === "username") {
      if (value.trim === "") return "Username is required";
    }
    if (name === "password") {
      if (value.trim === "") return "Password is required";
    }
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
  };

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    else this.doSubmit();
  };

  validateLogin = data => {
    const errors = { ...this.state.errors };
    if (data === undefined) {
      errors.username = "Invalid user";
    } else if (data.password !== this.state.account.password) {
      errors.password = "Wrong password";
    }

    this.setState({ errors });
    return Object.keys(errors).length === 0 ? true : false;
  };

  renderButton(label) {
    return <button className="btn btn-primary">{label}</button>;
  }
}

export default Form;
