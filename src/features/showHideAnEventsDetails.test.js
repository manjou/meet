import { loadFeature, defineFeature } from "jest-cucumber";

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    test('User sees a list of upcoming events', ({ given, when, then }) => {
        given('an event element is collapsed by default', () => {

        });

        when('the user opens the app', () => {

        });

        then('the user should see a list of upcoming events', () => {

        });
    });
    test('User expands an event to see details', ({ given, when, then }) => {
        given('the user can see a list of events', () => {

        });

        when('the user clicks to expand an event', () => {

        });

        then('the event details should be displayed', () => {

        });
    });
    test('User collapses an event to hide details', ({ given, when, then }) => {
        given('the user has expanded an event to see details', () => {

        });

        when('the user clicks to collapse the event', () => {

        });

        then('the event details should be hidden', () => {

        });
    });
});