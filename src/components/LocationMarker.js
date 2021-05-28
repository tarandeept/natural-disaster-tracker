const LocationMarker = ({ lat, lng, icon, onClick }) => {
  return (
    <div className="location-marker" onClick={onClick}>
      <>
        {icon}
      </>
    </div>
  )
}

export default LocationMarker