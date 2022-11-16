const puppeteer = require('puppeteer');
// console.log("Salamoon Alaikoom");

async function run() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://mdbootstrap.com/snippets/jquery/adamjakubowski/694459');

    

   await page.pdf(
        {
            path: 'nice-tag-cloud-mdbootstrap-adamjakubowski-694459.pdf', 
            format: 'A4'
        }
        ); 

    // await page.screenshot({path: 'example-facebook.png'}, {fullPage: true});
    
    await browser.close();
    }

run();