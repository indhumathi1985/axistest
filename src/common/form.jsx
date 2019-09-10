import React, { Component } from "react";
import Input from "./input";

class Form extends Component {
  state = {
    data: {},
    errors: {}
  };

  validate = () => {
    const errors = {};
    const { data } = this.state;
    if (data.username.trim() === "") errors.username = "Username is required";
    if (data.password.trim() === "") errors.password = "Password is required";

    return Object.keys(errors).length === 0 ? null : errors;
  };

  validateProperty = ({ name, value }) => {
    if (name === "username") {
      if (value.trim() === "") return "Username is required";
    }
    if (name === "password") {
      if (value.trim() === "") return "Password is required";
    }
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
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
    } else if (data.password !== this.state.data.password) {
      errors.password = "Wrong password";
    }

    this.setState({ errors });
    return Object.keys(errors).length === 0 ? true : false;
  };

  renderButton(label) {
    return <button className="btn btn-primary">{label}</button>;
  }

  renderInput(name, label, type) {
    const { data } = this.state;
    const { errors } = this.state;
    return (
      <Input
        name={name}
        value={data[name]}
        label={label}
        type={type}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }
}

export default Form;
