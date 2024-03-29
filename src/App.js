import React, { useEffect, useState } from 'react';
import EventList from './components/EventList';
import CitySearch from './components/CitySearch';
import NumberOfEvents from './components/NumberOfEvents';
import { extractLocations, getEvents } from './api';
// import logo from '..public/meet_logo144.png';
import { InfoAlert, WarningAlert, ErrorAlert } from './components/Alert';

import './App.css';
import CityEventsChart from './components/CityEventsChart';
import EventGenresChart from './components/EventGenresChart';


const App = () => {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(35);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");
  const [infoAlert, setInfoAlert] = useState("");
  const [errorAlert, setErrorAlert] = useState("");
  const [warningAlert, setWarningAlert] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const allEvents = await getEvents();
      const filteredEvents = currentCity === "See all cities" ? 
      allEvents : 
      allEvents.filter(event => event.location === currentCity)
      setEvents(filteredEvents.slice(0, currentNOE));
      setAllLocations(extractLocations(allEvents));
    }
    console.log("Warning Alert before if: " + warningAlert);
    if (navigator.onLine) {
      setWarningAlert("");
    } else {
      setWarningAlert("Your Internetconnection is offline. Data coming from cache");
    }
    console.log("Warning Alert after if: " + warningAlert);
    fetchData();
  }, [currentCity, currentNOE, warningAlert]);



  const handleNumberChanged = (event) => {
    const value = event.target.value;
    setCurrentNOE(value);
    let errorText;
    if(isNaN(value) || value <=0) {
      errorText = "Only positive numbers are valid";
      setErrorAlert(errorText);
    } else {
      errorText = "";
      setErrorAlert(errorText);
      setCurrentNOE(value);
      setWarningAlert("");
    }
  };

  return (
    <div className="App">
      <h1>Meet App</h1>
      <div className='alerts-container'>
        {infoAlert.length ? <InfoAlert text={infoAlert}/> : null}
        {errorAlert.length ? <ErrorAlert text={errorAlert}/> : null}
        {warningAlert.length ? <WarningAlert text={warningAlert}/> : null}
      </div>
      {/* <img src={logo} alt="meet logo" className='logo' /> */}

      <CitySearch 
        allLocations={allLocations} 
        setCurrentCity={setCurrentCity}
        setInfoAlert={setInfoAlert} 
      />
      <NumberOfEvents 
        currentNOE={currentNOE} 
        onNumberChanged={handleNumberChanged} 
        setErrorAlert={setErrorAlert}/>
      <div className='charts-container'>
        <EventGenresChart events={events} />
        <CityEventsChart allLocations={allLocations} events={events} />  
      </div>      
      <EventList events={events}/>
    </div>
  );
}

export default App;
