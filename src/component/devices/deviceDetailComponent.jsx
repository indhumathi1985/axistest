import React, { Component } from "react";
import DeviceService from "../../services/deviceService";

class DeviceDetailcomponent extends Component {
  state = {
    device: []
  };

  async componentDidMount() {
    const id = this.props.match.params.id;
    const device = await DeviceService.getDeviceById(id);
    this.setState({ device: device.data[0]});
  }

  render() {
    const devices = this.state.device;
    return (
      <div className="container" style={this.renderStyle()}>
        {this.renderDeviceDetail(devices).map(device => (
          <div className="form-group row">
            <label className="col-md-7">{device.label}</label>
            <div className="col-md-5">
              <input
                type="text"
                disabled={true}
                className="form-control"
                size="10"
                value={device.value}
              />
            </div>
          </div>
        ))}
        <div className="row justify-content-end ">
          <button
            type="button"
            className="btn btn-primary m-3"
            onClick={this.backToDevice}>
            Back
          </button>
        </div>
      </div>
    );
  }

  backToDevice = () => {
    this.props.history.replace(`/devices/${this.state.device.site_id}`);
  };

  renderDeviceDetail(device) {
    let deviceParams = [];
    let key;
    for (key in device) {
      if (!Array.isArray(device[key])) {
        deviceParams.push({
          label: key.charAt(0).toUpperCase() + key.substring(1),
          value: device[key]
        });
      }
    }
    return deviceParams;
  }

  renderStyle() {
    return {
      width: "40%",
      backgroundColor: "#F7F9F9",
      marginTop: "5%",
      padding: "2%"
    };
  }
}

export default DeviceDetailcomponent;
