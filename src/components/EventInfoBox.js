const EventInfoBox = ({ info, closeInfo }) => {
  return (
    <div className="event-info">
      <h3>Event Info</h3>
      <ul>
        <li>{info.title}</li>
        <li><a href={info.source} target="_blank">More info</a></li>
        <li><button onClick={closeInfo}>CLOSE</button></li>
      </ul>
    </div>
  )
}

export default EventInfoBox