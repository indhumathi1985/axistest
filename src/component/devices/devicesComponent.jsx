import React, { Component } from "react";
import DeviceService from "../../services/deviceService";
import Table from "../../common/table";

class DevicesComponent extends Component {
  state = {
    devices: [],
    sites: []
  };

  async componentDidMount() {
    const sites = await DeviceService.getSites(this.props.match.params.id);
    if (sites.data.length > 0) {
      const { data } = await DeviceService.getDevices(sites.data[0].id);
      this.setState({ devices: data, sites: sites.data[0] });
    }
  }

  render() {
    const devices = this.state.devices;
    return (
      <div>
        <h5 style={{ textAlign: "center", margin: "2%" }}>
          Devices Connected to the {this.state.sites.owner}
        </h5>
        <table className="table" style={this.renderStyle()}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Model</th>
            </tr>
          </thead>
          <tbody>
            {devices.map(device => (
              <Table
                key={device.id}
                device={device}
                handleRowClick={this.handleClick}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  handleClick = id => {
    this.props.history.push(`/deviceDetails/${id}`);
  };

  renderStyle() {
    return {
      backgroundColor: "#F7F9F9",
      width: "50%",
      top: "25%",
      left: "25%",
      position: "absolute"
    };
  }
}

export default DevicesComponent;
