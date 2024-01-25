


Feature: Show/Hide Event Details

    Scenario: User sees a list of upcoming events
        Given an event element is collapsed by default
        When the user opens the app
        Then the user should see a list of upcoming events

    Scenario: User expands an event to see details
        Given the user can see a list of events
        When the user clicks to expand an event
        Then the event details should be displayed

    Scenario: User collapses an event to hide details
        Given the user has expanded an event to see details
        When the user clicks to collapse the event
        Then the event details should be hidden