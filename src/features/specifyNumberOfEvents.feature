Feature: Specify Number of Events

    Scenario: User sees a default list of 32 upcoming events
        Given the user hasn't specified a number, 32 events are shown by default
        When the user opens the app
        Then the user should see a list of 32 upcoming events

    Scenario: User changes the number of events to be displayed
        Given the user can see a list of events
        When the user changes the number of events to be displayed
        Then the user should see a list of the specified number of events
