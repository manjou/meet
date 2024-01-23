// src/__tests__/NumberOfEvents.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NumberOfEvents from '../components/NumberOfEvents';
import userEvent from '@testing-library/user-event';

describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsComponent;
    beforeEach(() => {
        NumberOfEventsComponent = render(<NumberOfEvents />).container.firstChild;
    })

    test('renders textbox element', () => {
        expect(NumberOfEventsComponent.querySelector('.number')).toBeInTheDocument();
    });

    test('renders textbox with default value of 32', () => {
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
        render(<NumberOfEvents />);
        const numberOfEventsInput = screen.getByRole('spinbutton');
        await userEvent.type(numberOfEventsInput, "{backspace}{backspace}10");
        const allEvents = await getEvents();
        
        expect(numberOfEventsInput.value).toBe("10");
    })
})

