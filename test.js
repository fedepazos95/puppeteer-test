const puppeteer = require('puppeteer');

async function getPic() {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 })
    await page.goto('https://budgetbakersv30apiv1.docs.apiary.io/#reference/records/record-bulk-creation/create-new-record?console=1');
    // Click on Headers
    await page.click('#documentationMachineColumn > div > div.row.machineColumnConsoles.customScrollbar.customScrollbarConsole > div.machineColumnConsole > div.console.privateConsole > form > div.formRow.consoleFormRow.consoleFormTabs > div > ul > li.buttonGroupItem.buttonGroupItemHeaders');
    // Select value of X-Token and type the toke
    await page.click('#documentationMachineColumn > div > div.row.machineColumnConsoles.customScrollbar.customScrollbarConsole > div.machineColumnConsole > div.console.privateConsole > form > div.consoleFormTab.consoleFormHeadersTab > div > div > div:nth-child(2) > input.console-kit__request-parameter__value-input', { clickCount: 3 });
    await page.type('#documentationMachineColumn > div > div.row.machineColumnConsoles.customScrollbar.customScrollbarConsole > div.machineColumnConsole > div.console.privateConsole > form > div.consoleFormTab.consoleFormHeadersTab > div > div > div:nth-child(2) > input.console-kit__request-parameter__value-input', 'c77855ca-8584-4652-88b4-764c838945e4');
    // Select value of X-User and type the user
    await page.click('#documentationMachineColumn > div > div.row.machineColumnConsoles.customScrollbar.customScrollbarConsole > div.machineColumnConsole > div.console.privateConsole > form > div.consoleFormTab.consoleFormHeadersTab > div > div > div:nth-child(3) > input.console-kit__request-parameter__value-input', { clickCount: 3 });
    await page.type('#documentationMachineColumn > div > div.row.machineColumnConsoles.customScrollbar.customScrollbarConsole > div.machineColumnConsole > div.console.privateConsole > form > div.consoleFormTab.consoleFormHeadersTab > div > div > div:nth-child(3) > input.console-kit__request-parameter__value-input', 'fede.pazos95@gmail.com');
    //Click on Body
    await page.click('#documentationMachineColumn > div > div.row.machineColumnConsoles.customScrollbar.customScrollbarConsole > div.machineColumnConsole > div.console.privateConsole > form > div.formRow.consoleFormRow.consoleFormTabs > div > ul > li.buttonGroupItem.buttonGroupItemBody');
    // Click on textarea
    await page.click('#documentationMachineColumn > div > div.row.machineColumnConsoles.customScrollbar.customScrollbarConsole > div.machineColumnConsole > div.console.privateConsole > form > div.consoleFormTab.consoleFormBodyTab > div > textarea');
    await page.type('#documentationMachineColumn > div > div.row.machineColumnConsoles.customScrollbar.customScrollbarConsole > div.machineColumnConsole > div.console.privateConsole > form > div.consoleFormTab.consoleFormBodyTab > div > textarea', 'putito');
}

getPic();