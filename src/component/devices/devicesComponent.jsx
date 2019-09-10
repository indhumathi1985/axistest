import React from "react";
import DeviceService from "../../services/deviceService";
import TableData from "../../common/tableData";

class DevicesComponent extends TableData {
  state = {
    devices: [],
    sites: []
  };

  async componentDidMount() {
    const { data: sites } = await DeviceService.getSites(
      this.props.match.params.id
    );
    if (sites.length > 0) {
      const { data } = await DeviceService.getDevices(sites[0].id);
      this.setState({ devices: data, sites: sites[0] });
    }
  }

  render() {
    const devices = this.state.devices;
    if (devices.length === 0) {
      return (
        <h5 style={{ textAlign: "center", margin: "2%" }}>No Devices!!!</h5>
      );
    } else {
      return (
        <div>
          <h5 style={{ textAlign: "center", margin: "2%" }}>
            Devices Connected to the {this.state.sites.owner}
          </h5>
          <table className="table" style={this.renderStyle()}>
            <thead>
              <tr>
                {this.renderHeader("#")}
                {this.renderHeader("Title")}
                {this.renderHeader("Description")}
                {this.renderHeader("Model")}
              </tr>
            </thead>
            <tbody>{devices.map(device => this.renderRow(device))}</tbody>
          </table>
        </div>
      );
    }
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
