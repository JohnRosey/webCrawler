const puppeteer = require('puppeteer'); // v13.0.0 or later

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const timeout = 5000;
    page.setDefaultTimeout(timeout);

    {
        const targetPage = page;
        await targetPage.setViewport({"width":1390,"height":969})
    }
    {
        const targetPage = page;
        const promises = [];
        promises.push(targetPage.waitForNavigation());
        await targetPage.goto("https://fastsolutions.mroadmin.com/APEX-Login/login.jsp");
        await Promise.all(promises);
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down("Shift");
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["#user\\.login_id"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        const type = await element.evaluate(el => el.type);
        if (["select-one"].includes(type)) {
          await element.select("A");
        } else if (["textarea","text","url","tel","search","password","number","email"].includes(type)) {
          await element.type("A");
        } else {
          await element.focus();
          await element.evaluate((el, value) => {
            el.value = value;
            el.dispatchEvent(new Event('input', { bubbles: true }));
            el.dispatchEvent(new Event('change', { bubbles: true }));
          }, "A");
        }
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up("Shift");
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["#user\\.login_id"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        const type = await element.evaluate(el => el.type);
        if (["select-one"].includes(type)) {
          await element.select("Application");
        } else if (["textarea","text","url","tel","search","password","number","email"].includes(type)) {
          await element.type("Application");
        } else {
          await element.focus();
          await element.evaluate((el, value) => {
            el.value = value;
            el.dispatchEvent(new Event('input', { bubbles: true }));
            el.dispatchEvent(new Event('change', { bubbles: true }));
          }, "Application");
        }
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down("Tab");
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up("Tab");
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down("Shift");
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["#user\\.password"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        const type = await element.evaluate(el => el.type);
        if (["select-one"].includes(type)) {
          await element.select("F");
        } else if (["textarea","text","url","tel","search","password","number","email"].includes(type)) {
          await element.type("F");
        } else {
          await element.focus();
          await element.evaluate((el, value) => {
            el.value = value;
            el.dispatchEvent(new Event('input', { bubbles: true }));
            el.dispatchEvent(new Event('change', { bubbles: true }));
          }, "F");
        }
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up("Shift");
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["#user\\.password"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        const type = await element.evaluate(el => el.type);
        if (["select-one"].includes(type)) {
          await element.select("Fastenal002");
        } else if (["textarea","text","url","tel","search","password","number","email"].includes(type)) {
          await element.type("Fastenal002");
        } else {
          await element.focus();
          await element.evaluate((el, value) => {
            el.value = value;
            el.dispatchEvent(new Event('input', { bubbles: true }));
            el.dispatchEvent(new Event('change', { bubbles: true }));
          }, "Fastenal002");
        }
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down("Enter");
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up("Enter");
    }
    {
        const targetPage = page;
        const promises = [];
        promises.push(targetPage.waitForNavigation());
        const element = await waitForSelectors([["aria/Connexion »"],["#btnLogon"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({
          offset: {
            x: 67.78515625,
            y: 8.3125,
          },
        });
        await Promise.all(promises);
    }
    {
        const targetPage = page;
        const promises = [];
        promises.push(targetPage.waitForNavigation());
        const element = await waitForSelectors([["aria/Asset Activity"],["#assetActivityReport > a"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({
          offset: {
            x: 71.953125,
            y: 15.21484375,
          },
        });
        await Promise.all(promises);
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/Devices used by Devices owned by Aluminerie de Becancour Inc Becancour QC      Select a Site: All Sites","aria/[role=\"combobox\"]"],["#siteId"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({
          offset: {
            x: 126.4921875,
            y: 9.34375,
          },
        });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/Devices used by Devices owned by Aluminerie de Becancour Inc Becancour QC      Select a Site: All Sites","aria/[role=\"combobox\"]"],["#siteId"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        const type = await element.evaluate(el => el.type);
        if (["select-one"].includes(type)) {
          await element.select("SIT100590751");
        } else if (["textarea","text","url","tel","search","password","number","email"].includes(type)) {
          await element.type("SIT100590751");
        } else {
          await element.focus();
          await element.evaluate((el, value) => {
            el.value = value;
            el.dispatchEvent(new Event('input', { bubbles: true }));
            el.dispatchEvent(new Event('change', { bubbles: true }));
          }, "SIT100590751");
        }
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["#deviceId"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({
          offset: {
            x: 43.2734375,
            y: 7.34375,
          },
        });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["#deviceId"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        const type = await element.evaluate(el => el.type);
        if (["select-one"].includes(type)) {
          await element.select("DEV101117020");
        } else if (["textarea","text","url","tel","search","password","number","email"].includes(type)) {
          await element.type("DEV101117020");
        } else {
          await element.focus();
          await element.evaluate((el, value) => {
            el.value = value;
            el.dispatchEvent(new Event('input', { bubbles: true }));
            el.dispatchEvent(new Event('change', { bubbles: true }));
          }, "DEV101117020");
        }
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/Select View Fields"],["#all_info > div:nth-child(1) > div:nth-child(2) > a"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({
          offset: {
            x: 86.6328125,
            y: 10.37109375,
          },
        });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["#selectViewFileds > table > tbody > tr:nth-child(1) > td:nth-child(2) > input[type=checkbox]"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({
          offset: {
            x: 3.2265625,
            y: 9.9453125,
          },
        });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/Time Out","aria/[role=\"checkbox\"]"],["#selectViewFileds > table > tbody > tr:nth-child(3) > td:nth-child(2) > input[type=checkbox]"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({
          offset: {
            x: 8.2265625,
            y: 4.5625,
          },
        });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/Allocation Code 1[role=\"gridcell\"]","aria/[role=\"checkbox\"]"],["#selectViewFileds > table > tbody > tr:nth-child(3) > td:nth-child(4) > input[type=checkbox]"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({
          offset: {
            x: 2.859375,
            y: 6.5625,
          },
        });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["#selectViewFileds > table > tbody > tr:nth-child(4) > td:nth-child(4) > input[type=checkbox]"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({
          offset: {
            x: 2.859375,
            y: 3.37109375,
          },
        });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/Allocation Instance Number 1[role=\"gridcell\"]","aria/[role=\"checkbox\"]"],["#selectViewFileds > table > tbody > tr:nth-child(3) > td:nth-child(5) > input[type=checkbox]"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({
          offset: {
            x: 7.58984375,
            y: 1.5625,
          },
        });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["#all_info > div:nth-child(1) > div:nth-child(6) > input[type=checkbox]:nth-child(1)"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({
          offset: {
            x: 3.94921875,
            y: 5.08203125,
          },
        });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["#all_info > div:nth-child(1) > div:nth-child(6) > input[type=checkbox]:nth-child(5)"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({
          offset: {
            x: 3.953125,
            y: 7.08203125,
          },
        });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/Search"],["#search"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({
          offset: {
            x: 8.3046875,
            y: 4.1875,
          },
        });
    }
    {
        const targetPage = page;
        const element = await waitForSelectors([["aria/User Name[role=\"link\"]"],["#UserFirstName > a"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({
          offset: {
            x: 42.1171875,
            y: 3.03125,
          },
        });
    }
    {
        const targetPage = page;
        const promises = [];
        promises.push(targetPage.waitForNavigation());
        const element = await waitForSelectors([["aria/Download XLS"],["#showDownLoadXLS"]], targetPage, { timeout, visible: true });
        await scrollIntoViewIfNeeded(element, timeout);
        await element.click({
          offset: {
            x: 60.4921875,
            y: 8.73828125,
          },
        });
        await Promise.all(promises);
    }

    await browser.close();

    async function waitForSelectors(selectors, frame, options) {
      for (const selector of selectors) {
        try {
          return await waitForSelector(selector, frame, options);
        } catch (err) {
          console.error(err);
        }
      }
      throw new Error('Could not find element for selectors: ' + JSON.stringify(selectors));
    }

    async function scrollIntoViewIfNeeded(element, timeout) {
      await waitForConnected(element, timeout);
      const isInViewport = await element.isIntersectingViewport({threshold: 0});
      if (isInViewport) {
        return;
      }
      await element.evaluate(element => {
        element.scrollIntoView({
          block: 'center',
          inline: 'center',
          behavior: 'auto',
        });
      });
      await waitForInViewport(element, timeout);
    }

    async function waitForConnected(element, timeout) {
      await waitForFunction(async () => {
        return await element.getProperty('isConnected');
      }, timeout);
    }

    async function waitForInViewport(element, timeout) {
      await waitForFunction(async () => {
        return await element.isIntersectingViewport({threshold: 0});
      }, timeout);
    }

    async function waitForSelector(selector, frame, options) {
      if (!Array.isArray(selector)) {
        selector = [selector];
      }
      if (!selector.length) {
        throw new Error('Empty selector provided to waitForSelector');
      }
      let element = null;
      for (let i = 0; i < selector.length; i++) {
        const part = selector[i];
        if (element) {
          element = await element.waitForSelector(part, options);
        } else {
          element = await frame.waitForSelector(part, options);
        }
        if (!element) {
          throw new Error('Could not find element: ' + selector.join('>>'));
        }
        if (i < selector.length - 1) {
          element = (await element.evaluateHandle(el => el.shadowRoot ? el.shadowRoot : el)).asElement();
        }
      }
      if (!element) {
        throw new Error('Could not find element: ' + selector.join('|'));
      }
      return element;
    }

    async function waitForElement(step, frame, timeout) {
      const count = step.count || 1;
      const operator = step.operator || '>=';
      const comp = {
        '==': (a, b) => a === b,
        '>=': (a, b) => a >= b,
        '<=': (a, b) => a <= b,
      };
      const compFn = comp[operator];
      await waitForFunction(async () => {
        const elements = await querySelectorsAll(step.selectors, frame);
        return compFn(elements.length, count);
      }, timeout);
    }

    async function querySelectorsAll(selectors, frame) {
      for (const selector of selectors) {
        const result = await querySelectorAll(selector, frame);
        if (result.length) {
          return result;
        }
      }
      return [];
    }

    async function querySelectorAll(selector, frame) {
      if (!Array.isArray(selector)) {
        selector = [selector];
      }
      if (!selector.length) {
        throw new Error('Empty selector provided to querySelectorAll');
      }
      let elements = [];
      for (let i = 0; i < selector.length; i++) {
        const part = selector[i];
        if (i === 0) {
          elements = await frame.$$(part);
        } else {
          const tmpElements = elements;
          elements = [];
          for (const el of tmpElements) {
            elements.push(...(await el.$$(part)));
          }
        }
        if (elements.length === 0) {
          return [];
        }
        if (i < selector.length - 1) {
          const tmpElements = [];
          for (const el of elements) {
            const newEl = (await el.evaluateHandle(el => el.shadowRoot ? el.shadowRoot : el)).asElement();
            if (newEl) {
              tmpElements.push(newEl);
            }
          }
          elements = tmpElements;
        }
      }
      return elements;
    }

    async function waitForFunction(fn, timeout) {
      let isActive = true;
      setTimeout(() => {
        isActive = false;
      }, timeout);
      while (isActive) {
        const result = await fn();
        if (result) {
          return;
        }
        await new Promise(resolve => setTimeout(resolve, 100));
      }
      throw new Error('Timed out');
    }
})();
