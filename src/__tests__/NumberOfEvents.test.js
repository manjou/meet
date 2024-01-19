// src/__tests__/NumberOfEvents.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NumberOfEvents from '../components/NumberOfEvents';

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