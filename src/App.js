import React, { useEffect, useState } from 'react';
import EventList from './components/EventList';
import CitySearch from './components/CitySearch';
import NumberOfEvents from './components/NumberOfEvents';
import { extractLocations, getEvents } from './api';
import logo from './meet_logo.png';

import './App.css';


const App = () => {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(35);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");

  useEffect(() => {
    const fetchData = async () => {
      const allEvents = await getEvents();
      const filteredEvents = currentCity === "See all cities" ? 
      allEvents : 
      allEvents.filter(event => event.location === currentCity)
      setEvents(filteredEvents.slice(0, currentNOE));
      setAllLocations(extractLocations(allEvents));
    } 

    fetchData();
  }, [currentCity, currentNOE]);


  const handleNumberChanged = (event) => {
    const value = event.target.value;
    setCurrentNOE(value);
  }

  return (
    <div className="App">
      <img src={logo} alt="meet logo" className='logo' />
      <CitySearch allLocations={allLocations} setCurrentCity={setCurrentCity} />
      <NumberOfEvents currentNOE={currentNOE} onNumberChanged={handleNumberChanged} />
      <EventList events={events}/>
    </div>
  );
}

export default App;
