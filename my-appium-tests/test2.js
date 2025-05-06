const wd = require("wd");
const driver = wd.remote("http://localhost:4723/wd/hub");

const desiredCaps = {
  platformName: "Android",
  deviceName: "emulator-5554",
  app: "C:/Users/ssshe/AndroidStudioProjects/MyFirstApplication/app/build/outputs/apk/debug/demo.apk",
  automationName: "UiAutomator2"
};

async function runTest() {
  await driver.init(desiredCaps);
  // Your test steps here
  await driver.quit();
}

runTest().catch(console.error);