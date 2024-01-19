// src/components/NumberOfEvents.js
import React, { useState } from 'react';

const NumberOfEvents = () => {
    const [numberOfEvents, setNumberOfEvents] = useState(35);

    const handleNumberChanged = (event) => {
        const value = event.target.value;
        setNumberOfEvents(value);
    }

    return (
        <div id="number-of-events">
            <input
                type="number"
                className="number"
                value={numberOfEvents}
                onChange={handleNumberChanged}
            />
        </div>
    );
}

export default NumberOfEvents;