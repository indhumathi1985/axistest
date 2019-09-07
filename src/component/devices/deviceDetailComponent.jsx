import React, { Component } from "react";
import DeviceService from "../../services/deviceService";

class DeviceDetailcomponent extends Component {
  state = {
    device: []
  };

  async componentDidMount() {
    const id = this.props.match.params.id;
    const device = await DeviceService.getDeviceById(id);
    this.setState({ device: device.data[0] });
  }

  render() {
    const device = this.state.device;
    return (
      <div className="container" style={this.renderStyle()}>
        <div class="form-group row">
          <label class="col-sm-5 col-form-label">
            <b>Description:</b>
          </label>
          <div class="col-sm-7">
            <input
              type="text"
              readonly
              class="form-control-plaintext"
              value={device.description}
            />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-5 col-form-label">
            <b>Model:</b>
          </label>
          <div class="col-sm-7">
            <input
              type="text"
              readonly
              class="form-control-plaintext"
              value={device.model}
            />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-5 col-form-label">
            <b>Version:</b>
          </label>
          <div class="col-sm-7">
            <input
              type="text"
              readonly
              class="form-control-plaintext"
              value={device.version}
            />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-5 col-form-label">
            <b>TimeZone:</b>
          </label>
          <div class="col-sm-7">
            <input
              type="text"
              readonly
              class="form-control-plaintext"
              value={device.timezone}
            />
          </div>
        </div>
      </div>
    );
  }

  renderStyle() {
    return {
      width: "40%",
      backgroundColor: "#F7F9F9",
      marginTop: "10%",
      padding: "2%"
    };
  }
}

export default DeviceDetailcomponent;
