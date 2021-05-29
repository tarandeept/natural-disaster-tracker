var dayjs = require('dayjs');

const EventInfoBox = ({ info, closeInfo }) => {
  const date = dayjs(info.date).format('MMM D, YYYY h:mm A');

  return (
    <div className="event-info">
      <h3>Event Info</h3>
      <ul>
        <li>Title: {info.title}</li>
        <li>Date: {date}</li>
        <li><a href={info.source} target="_blank" rel="noopener noreferrer">More info</a></li>
        <li><button onClick={closeInfo}>CLOSE</button></li>
      </ul>
    </div>
  )
}

export default EventInfoBox