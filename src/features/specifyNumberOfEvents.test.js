import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import { render, within, waitFor, fireEvent } from "@testing-library/react";
import EventList from "../components/EventList";
import { getEvents } from "../api";
import App from "../App";

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    test('User sees a default list of 35 upcoming events', ({ given, when, then }) => {
        given('the user hasn\'t specified a number, 35 events are shown by default', () => {

        });
        let AppComponent;
        when('the user opens the app', () => {
            AppComponent = render(<App />);
        });

        then('the user should see a list of 35 upcoming events', () => { 
            AppComponent = render(<App />);
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
            await waitFor(() => {
              const EventListItems = within(EventListDOM).queryAllByRole('listitem');
              expect(EventListItems.length).toBe(35);
        });
    });
    test('User changes the number of events to be displayed', ({ given, when, then }) => {
        let AppComponent;
        given('the user can see a list of events', () => {
            AppComponent = render(<App />);
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
        });

        when('the user changes the number of events to be displayed', () => {
            const NumberOfEventsTextBox = within(AppComponent.container).getByRole('spinbutton');
            fireEvent.change(NumberOfEventsTextBox, { target: { value: 10 }});
            await waitFor(() => expect(NumberOfEventsTextBox.value).toBe('10'));

        });

        then('the user should see a list of the specified number of events', () => {
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
            await waitFor(() => {
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(10);
            })
        });
    });

});