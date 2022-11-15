const dialog = require("../../page/login.page");
const expect = require("chai").expect;
describe("loginDialog", () => {
  it("Verify when email id and password are left blank", async () => {
    await dialog.loginBtn.click();
  });
});
