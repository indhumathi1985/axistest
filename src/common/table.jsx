import React, { Component } from "react";

class Table extends Component {
  render() {
    return (
      <tr
        style={{ cursor: "pointer" }}
        onClick={() => this.props.handleRowClick(this.props.id)}
      >
        <td>{this.props.id}</td>
        <td>{this.props.title}</td>
        <td>{this.props.description}</td>
        <td>{this.props.model}</td>
      </tr>
    );
  }
}

export default Table;
