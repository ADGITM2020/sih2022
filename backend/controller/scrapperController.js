const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const puppeteer = require("puppeteer");
const fs = require("fs");


exports.getLinkedInScrapper = catchAsyncErrors(async(req, res, next) => {
    
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(
      "https://www.linkedin.com/jobs/search/?geoId=102713980&keywords=coding&location=India"
    );
    const HackList = await page.evaluate(() => {
        let hotelsElms = document.querySelectorAll('.job-search-card');
        let results=[];
        hotelsElms.forEach((hack) => {
             results.push({
          name: hack.querySelector("h3").innerText.trim(),
          company_name: hack
            .querySelector("h4.base-search-card__subtitle")
            .innerText.trim(),
          location: hack
            .querySelector(".job-search-card__location")
            .innerText.trim(),
        
        })
        });
       
        return results;
    });
    
   
    res.json(HackList);
  
    console.log(HackList);
    await browser.close();
    res.status(200).json({
      results
    })
  })