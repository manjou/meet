import puppeteer from 'puppeteer';

describe('show/hide an event detail', () => {
    let browser;
    let page;
    beforeAll(async () => {
        // browser = await puppeteer.launch();
        browser = await puppeteer.launch({
            headless: false,
            slowMo: 250, // slow down by 250ms,
            timeout: 0 // removes any puppeteer/browser timeout limitations (this isn't the same as the timeout of jest)
        });
        page = await browser.newPage();
        await page.goto('http://localhost:3000/');
        await page.waitForSelector('.event');
    });

    afterAll(() => {
        browser.close();
    });

    test('An event element is collapsed by default', async () => {
        const eventDetails = await page.$('.event .details');
        expect(eventDetails).toBeNull();
    });

    test('User can expand an event to see its details', async () => {
        await page.click('.event .details-btn');

        const eventDetails = await page.$('.event .details');
        expect(eventDetails).toBeDefined();
    });

    test('User can collapse an event to hide details', async () => {
        await page.click('.event .details-btn');
        const eventDetails = await page.$('.event .details');
        expect(eventDetails).toBeNull();
    });
});

describe('filter events by city', () => {
    let browser;
    let page;

    beforeAll(async () => {
        browser = await puppeteer.launch();
        page = await browser.newPage();
        await page.goto('http://localhost:3000/');
        await page.waitForSelector('.event');
    });

    afterAll(() => {
        browser.close();
    });

    test('user can filter events by city', async () => {
        // Type 'Berlin' into the city search input field
        await page.type('#city-search .city', 'Berlin');

        // wait for the suggestions to appear and click the first one
        await page.waitForSelector('#city-search .suggestions li');
        await page.click('#city-search .suggestions li');

        // Wait for the events to be filtered
        await page.waitForFunction(
            `document.querySelector('.event').innerText.includes('Berlin')`
        );

        const firstEvent = await page.$('.event');
        const firstEventText = await (await firstEvent.getProperty('innerText')).jsonValue();

        // check if the first event contains 'Berlin'
        expect(firstEventText).toContain('Berlin');
    });
});