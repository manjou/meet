// src/__tests__/NumberOfEvents.test.js
import React from 'react';
import { render, within, screen, fireEvent } from '@testing-library/react';
import NumberOfEvents from '../components/NumberOfEvents';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { getEvents } from '../api';

describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsComponent;
    beforeEach(() => {
        NumberOfEventsComponent = render(<NumberOfEvents />).container.firstChild;
    })

    test('renders textbox element', () => {
        expect(NumberOfEventsComponent.querySelector('.number')).toBeInTheDocument();
    });

    test('renders textbox with default value of 35', () => {
        expect(NumberOfEventsComponent.querySelector('.number').value).toBe('35');
    });

    test('changes value when number is typed in textbox', () => {
        const numberOfEventsInput = NumberOfEventsComponent.querySelector('.number');
        fireEvent.change(numberOfEventsInput, { target: { value: '10' } });
        expect(numberOfEventsInput.value).toBe('10');
    });
});

describe('<NumberOfEvents /> integration', () => {
    test('user changes number of events in textbox and number of events in the list will change accordingly', async () => {   
        render(<App />);
        const NumberOfEventsTextBox = within(document.body).getByRole('spinbutton');
        
        await userEvent.type(NumberOfEventsTextBox, "{backspace}{backspace}10");
        const allEvents = await getEvents();

        // Now each event is rendered with a class of 'event'
        const eventElements = screen.getAllByTestId('event');
        expect(NumberOfEventsTextBox.value).toBe("10");
        expect(eventElements.length).toBe(10);
    })
})



