import { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';
import { GiEarthCrack } from 'react-icons/gi';
import { GiFlood } from 'react-icons/gi';
import { MdLandscape } from 'react-icons/md';
import { IoThunderstormOutline } from 'react-icons/io5';
import { WiVolcano } from 'react-icons/wi';
import { ImFire } from 'react-icons/im';
const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

const Map = ({ events }) => {
  const [earthquakes, setEarthquakes] = useState(events.earthquakes);
  const [floods, setFloods] = useState(events.floods);
  const [landslides, setLandslides] = useState(events.landslides);
  const [storms, setStorms] = useState(events.storms);
  const [volcanoes, setVolcanoes] = useState(events.volcanoes);
  const [wildfires, setWildfires] = useState(events.wildfires);
  const [center, setCenter] = useState( {lat: 36.7909, lng: -119.8052} );
  const [zoom, setZoom] = useState(5);

  const get_coordinates = (ev) => {
    let coords = ev.geometry[0].coordinates;
    while (Array.isArray(coords[0])) {
      coords = coords[0];
    }
    const longitude = coords[0];
    const latitude = coords[1];
    return { longitude, latitude };
  } 

  const generate_markers = (events, icon) => {
    let result = [];
    if (events) {
      result = events.map(ev => {
        const { latitude, longitude } = get_coordinates(ev);
        const id = ev.id;
        return <LocationMarker lat={latitude} lng={longitude} icon={icon} key={id}/>
      })
    }
    return result;
  }

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{key: GOOGLE_API_KEY}}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {generate_markers(earthquakes, <GiEarthCrack className="earthquake-icon"/>)}
        {generate_markers(floods, <GiFlood className="flood-icon"/>)}
        {generate_markers(landslides, <MdLandscape className="landslide-icon"/>)}
        {generate_markers(storms, <IoThunderstormOutline className="storm-icon"/>)}
        {generate_markers(volcanoes, <WiVolcano className="volcano-icon"/>)}
        {generate_markers(wildfires, <ImFire className="fire-icon"/>)}
      </GoogleMapReact>
    </div>
  )
}

export default Map