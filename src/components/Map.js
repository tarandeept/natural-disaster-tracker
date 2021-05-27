import GoogleMapReact from 'google-map-react';
const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

const Map = () => {
  const obj = {
    center: {
      lat: 42.3265,
      lng: -122.8756
    },
    zoom: 6
  }

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{key: GOOGLE_API_KEY}}
        defaultCenter={obj.center}
        defaultZoom={obj.zoom}
      >

      </GoogleMapReact>
    </div>
  )
}

export default Map