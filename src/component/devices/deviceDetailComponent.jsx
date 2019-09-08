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
                className="form-control "
                size="10"
                value={device.value}
              />
            </div>
          </div>
        ))}
        <div className="row justify-content-end ">
          <button type="button" className="btn btn-primary m-3">
            Back
          </button>
        </div>
      </div>
    );
  }

  renderDeviceDetail(device) {
    let deviceParams = [];
    let k;
    let i = 0;
    for (k in device) {
      if (!Array.isArray(device[k])) {
        deviceParams.push({
          key: i++,
          label: k.charAt(0).toUpperCase() + k.substring(1),
          value: device[k]
        });
      }
    }
    return deviceParams;
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
