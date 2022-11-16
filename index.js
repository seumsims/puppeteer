const puppeteer = require('puppeteer');
// console.log("Salamoon Alaikoom");

async function run() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://codecanyon.net/');

    await page.pdf(
        {
            path: 'codecanyon.pdf', 
            format: 'A4'
        }
        );

    // await page.screenshot({path: 'example-facebook.png'}, {fullPage: true});
    
    await browser.close();
    }

run();