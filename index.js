const puppeteer = require('puppeteer');
// console.log("Salamoon Alaikoom");

async function run() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://shop.activeitzone.com/');

    

/*    await page.pdf(
        {
            path: 'nice-tag-cloud-mdbootstrap-adamjakubowski-694459.pdf', 
            format: 'A4'
        }
        );  */

    // await page.screenshot({path: 'nice-tag-cloud-mdbootstrap-adamjakubowski-694459.png'}, {fullPage: true});

    const html = await page.content();
    console.log(html);
    
    await browser.close();

    }

run();