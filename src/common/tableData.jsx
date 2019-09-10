import React, { Component } from "react";
import Table from "./table";

class TableData extends Component {
  state = {};

  renderHeader(label) {
    return <th scope="col">{label}</th>;
  }

  renderRow(params) {
    return (
      <Table
        key={params.id}
        device={params}
        handleRowClick={this.handleClick}
      />
    );
  }
}

export default TableData;
