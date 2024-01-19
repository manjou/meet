import React, { useEffect, useState } from 'react';
import EventList from './components/EventList';
import './App.css';
import CitySearch from './components/CitySearch';
import NumberOfEvents from './components/NumberOfEvents';
import { getEvents } from './api';


const App = () => {
  const [events, setEvents] = useState([]);
  const [numberOfEvents, setNumberOfEvents] = useState(35);

  useEffect(() => {
    getEvents().then(events => setEvents(events.slice(0, numberOfEvents)))
  }, [numberOfEvents]);

  const handleNumberChanged = (event) => {
    const value = event.target.value;
    setNumberOfEvents(value);
  }

  return (
    <div className="App">
      <CitySearch />
      <NumberOfEvents numberOfEvents={numberOfEvents} onNumberChanged={handleNumberChanged} />
      <EventList events={events}/>
    </div>
  );
}

export default App;
