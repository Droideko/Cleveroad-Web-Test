import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
   width: '100%',
   height: '100%',
};

class MapContainer extends Component {
   render(){
      const { lat, lng } = this.props;
      return (
         <Map
            google={this.props.google}
            zoom={7}
            style={mapStyles}
            initialCenter={{ lat, lng }} 
            center={{ lat, lng }} 
         >   
            <Marker position={{ lat, lng }} />
         </Map>      
      )
   }
}

export default GoogleApiWrapper({
   apiKey: 'AIzaSyDX0-jUM2Aw0YVZoWIk1zy4DUEQAfsVPKg'
})(MapContainer);