import React, { Component } from "react";

class Table extends Component {
  render() {
    return (
      <tr
        style={{ cursor: "pointer" }}
        onClick={() => this.props.handleRowClick(this.props.device.id)}>
        <td>{this.props.device.id}</td>
        <td>{this.props.device.title}</td>
        <td>{this.props.device.description}</td>
        <td>{this.props.device.model}</td>
      </tr>
    );
  }
}

export default Table;
