import { useState, useEffect } from 'react';
import Map from './components/Map';
import Loader from './components/Loader';

function App() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch('events');
      const event_data = await res.json();

      setEvents(event_data);
      setLoading(false);
    }

    fetchEvents();
  }, [])

  return (
    <div>
      { loading ? <Loader/> : <Map events={events} /> }
    </div>
  );
}

export default App;
