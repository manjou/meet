import EventList from './components/EventList';
import './App.css';
import React from 'react';
import CitySearch from './components/CitySearch';


const App = () => {
  return (
    <div className="App">
      <CitySearch />
      <EventList />
    </div>
  );
}

export default App;
