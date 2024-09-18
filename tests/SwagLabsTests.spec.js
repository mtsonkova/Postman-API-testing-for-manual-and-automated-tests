const {describe, test, expect, beforeEach, afterEach, beforeAll, afterAll} = require('@playwright/test');
const {chromium} = require('playwright');

let browser;
let context;
let page;

describe('SwagLabs Tests', async () => {

    beforeAll(async() => {
        browser = await chromium.launch();
    }) 

    afterAll(async() => {
        await browser.close();
    })

    beforeEach(async() => {
        context = await browser.newContext();
        page = await context.newPage();
        await page.goto('/');
    })

    afterEach(async () => {
        await page.close();
        await context.close();
    });

})