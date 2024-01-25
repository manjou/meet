import { loadFeature, defineFeature } from "jest-cucumber";

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    test('User sees a default list of 32 upcoming events', ({ given, when, then }) => {
        given('the user hasn\'t specified a number, 32 events are shown by default', () => {

        });

        when('the user opens the app', () => {

        });

        then('the user should see a list of 32 upcoming events', () => { // Corrected here

        });
    });
    test('User changes the number of events to be displayed', ({ given, when, then }) => {
        given('the user can see a list of events', () => {

        });

        when('the user changes the number of events to be displayed', () => {

        });

        then('the user should see a list of the specified number of events', () => {

        });
    });

});