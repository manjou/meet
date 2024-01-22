# meet
## Table of Contents

1. [Introduction](#Introduction)
2. [Objective](#Objective)
3. [User Stories / Features](#User-Stories / Features)
   a. [Feature 1](#Feature-1)
   b. [Feature 2](#Feature-2)
   c. [Feature 3](#Feature-3)
   d. [Feature 4](#Feature-4)
   e. [Feature 5](#Feature-5)
   f. [Feature 6](#Feature-6)
5. [Features & Requirements](#Features-&-Requirements)
6. [Technical Requirements](#Technical-Requirements)
7. [Live Version](#Live-Version)
8. [Screenshots of the moveFlix App](#Screenshots)
9. [Running the Project](#Running-the-Project)
10. [References](#References)
11. [Acknowledgements](#Acknowldedgements)

## Introduction
Welcome to my meet app github repo. this app is build serverless on AWS as a progressive web application (PWA) with React using test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.
For this rather small app we are using serverless so we don´t have to create and maintain a server. Serverless is cost efficient as you pay only for the ressources you use. It comes with autoscale by default and it is easy to deploy. We will use AWS Lambda and Google OAuth for authorization.


## Objective

## User-Stories / Features

### Feature 1
As a user, i should be able to filter events by city, so that i can see a list of events taking place in that city.

#### Scenario 1
When user hasn’t searched for a specific city, show upcoming events from all cities.
**Given** user hasn’t searched for any city;
**When** the user opens the app;
**Then** the user should see a list of upcoming events

#### Scenario 2
User should see a list of suggestions when they search for a city.
**Given** the main page is open
**When** user starts typing in the city text box;
**Then** the user should receive a list of cities (suggestions) that match what they’ve typed.

#### Scenario 3
User can select a city from the suggested list
**Given** user was typing “Berlin” in the city text box AND the list of suggested cities is showing
**When** the user selects a city (e.g. “Berlin, Germany”) from the list;
**Then** their city should be changed to that city (i.e., “Berlin, Germany”) AND the user should receive a list of upcoming events in that city


### Feature 2
As a user, i should be ablet to show/hide Event Details.

#### Scenario 1
Given an event element is collapsed by default
When the user opens the app
Then the user should see a list of upcoming events

#### Scenario 2
Given the user can see a list of events
When the user clicks to expand an event
Then the event details should be displayed

#### Scenario 3
Given the user has expanded an event to see details
When the user clicks to collapse the event
Then the event details should be hidden


### Feature 3
As a user, i should be able to specify the number of events.

#### Scenario 1
**Given** the user hasn't specified a number, 32 events are shown by default
**When** the user opens the app
**Then** the user should see a list of 32 upcoming events

#### Scenario 2
**Given** the user can see a list of events
**When** the user changes the number of events to be displayed
**Then** the user should see a list of the specified number of events


### Feature 4
As a user, i should be able to use the app when offline.

#### Scenario 1
**Given** the app has cached data
**When** there's no internet connection
**Then** the app should display the cached data

#### Scenario 2
**Given** the user has changed search settings (city, number of events)
**When** there's no internet connection
**Then** the app should show an error message


### Feature 5
As a user, i should be able to add an App Shortcut to the home screen.

#### Scenario 1
**Given** the app is installed on the device
**When** the user adds a shortcut to the home screen
**Then** the app shortcut should be created


### Feature 6
As a user, i should be able to display Charts visualizing event details.

#### Scenario 1
**Given** the user is viewing the app
**When** the app loads
**Then** a chart with the number of upcoming events in each city should be displayed


## Technical-Requirements

● The app must be a React application.
● The app must be built using the TDD technique.
● The app must use the Google Calendar API and OAuth2 authentication flow.
● The app must use serverless functions (AWS lambda is preferred) for the authorization server
instead of using a traditional server.
● The app’s code must be hosted in a Git repository on GitHub.
● The app must work on the latest versions of Chrome, Firefox, Safari, Edge, and Opera, as well
as on IE11.
● The app must display well on all screen sizes (including mobile and tablet) widths of 1920px
and 320px.
● The app must pass Lighthouse’s PWA checklist.
● The app must work offline or in slow network conditions with the help of a service worker.
● Users may be able to install the app on desktop and add the app to their home screen on
mobile.
● The app must be deployed on GitHub Pages.
● The app must implement an alert system using an OOP approach to show information to the
user.
● The app must make use of data visualization.
● The app must be covered by tests with a coverage rate >= 90%.
● The app must be monitored using an online performance monitoring tool



## Live Version
To deploy the app, I was using GitHub Pages. You can visit the app [here](https://manjou.github.io/meet/).


## Screenshots


## Running-the-Project

## References


## Acknowldedgements


