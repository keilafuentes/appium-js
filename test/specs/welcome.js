const { AppiumDriver } = require("appium/build/lib/appium");
const dialog = require("../../screenObjects/welcomeObject.page");

describe("welcomeDialog", () => {
  it("closeTips", async () => {
    await dialog.nextBtn.click();
    await dialog.closeBtn.click();
  });
});
