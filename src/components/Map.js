import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';
const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

const Map = () => {
  const map_properties = {
    center: {
      lat: 36.7909,
      lng: -119.8052
    },
    zoom: 6
  }

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{key: GOOGLE_API_KEY}}
        defaultCenter={map_properties.center}
        defaultZoom={map_properties.zoom}
      >
        <LocationMarker lat={map_properties.center.lat} lng={map_properties.center.lng}/>
      </GoogleMapReact>
    </div>
  )
}

export default Map