import puppeteer from "puppeteer";
import _ from "lodash"
import fs from "fs";

const url =
  "https://charleyproject.org/case-searches/alphabetical-cases?letter=A";

const main = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "load"});

  const allPageCases = await page.evaluate(() => {
    const cases = document.querySelectorAll(".case");

    return Array.from(cases)
      .map((cCase) => {
        const caseName = cCase.querySelector("a").innerText;
        const caseUrl = cCase.querySelector("a").href;
        if(_.isEmpty(caseName) && _.isEmpty(caseUrl)) {
            return { caseName, caseUrl };
        } 
      });
  });

  console.log(allPageCases);

  /*

  const pageCases = await page.querySelectorAll(".case");

  for (const pageCase of pageCases) {
    console.log(pageCase);
    const caseName = pageCase.querySelector("a").innerText;
    const caseUrl = pageCase.querySelector("a").href;
    console.log(caseName, caseUrl);
    await page.click(pageCase.querySelector("a"));
    const details = document.getElementsByClassName("li");
    console.log(details);
  }

  //console.log(allPageCases);

     
    for (const metaCase of allPageCases) {
      const casePage = await browser.newPage();
      await casePage.goto(metaCase.caseUrl);
      const caseInfo = await page.evaluate(() => {
        
        return Array.from(details)
    
        return Array.from(details).map((cCase) => {
            const detailKey = cCase.querySelector("strong").textContent;
            const detailValue = cCase.textContent;
            return { detailKey, detailValue };
          });
      });

      console.log(caseInfo)
    }*/
    await browser.close()
};

main();
