import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;



var sfLat = 37.7241, sfLong = -122.4799;

class SimpleMap extends Component {
 

 componentDidMount() {
  }

 static defaultProps = {
    center: {
      lat: sfLat,
      lng: sfLong
    },
    zoom: 11,
    mapId: '983106035cd0f095'
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDPLGQ2-8F_lzs13ZgYbKvLosRafqE5tJs" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={sfLat}
            lng={sfLong}
            text="Your Location: San Francisco State University"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;