const puppeteer = require('puppeteer');
// console.log("Salamoon Alaikoom");

async function run() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://awesomescreenshot.s3.amazonaws.com/image/2444784/34434303-fcd05ed9e7c9eb5e78dd44ebb29337cd.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJSCJQ2NM3XLFPVKA%2F20221116%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20221116T060835Z&X-Amz-Expires=28800&X-Amz-SignedHeaders=host&X-Amz-Signature=5e212b48a02d4f90c73f2d0821c1ba10ac67f9a24ab24fc449726cb36cf67693');

    

/*    await page.pdf(
        {
            path: 'nice-tag-cloud-mdbootstrap-adamjakubowski-694459.pdf', 
            format: 'A4'
        }
        );  */

    await page.screenshot({path: 'nice-tag-cloud-mdbootstrap-adamjakubowski-694459.png'}, {fullPage: true});
    
    await browser.close();
    }

run();