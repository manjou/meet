// src/components/NumberOfEvents.js
import React from 'react';

const NumberOfEvents = ( { currentNOE, onNumberChanged }) => {
    return (
        <div id="number-of-events">
            <label htmlFor="number-of-events-input">Number of Events: </label>
            <input
                type="number"
                className="number"
                defaultValue="35"
                // value={currentNOE}
                onChange={onNumberChanged}
            />
        </div>
    );
}

export default NumberOfEvents;