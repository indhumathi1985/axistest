import React, { Component } from 'react';


class DevicesComponent extends Component {
    state = {  
        devices :[]
    }

    render() { 
        return (<h1>Devices - {this.props.match.params.username} </h1>);
    }

    async
}
 
export default DevicesComponent;