const wd = require("wd");
const driver = wd.promiseChainRemote("http://localhost:4723/wd/hub");

const desiredCaps = {
  platformName: "Android",
  deviceName: "emulator-5554",
  app: "C:\Users\ssshe\AndroidStudioProjects\MyFirstApplication\app\build\outputs\apk\debug\demo.apk",
  automationName: "UiAutomator2"
};

async function runTest() {
  await driver.init(desiredCaps);
  // Your test steps here
  await driver.quit();
}

runTest().catch(console.error);

search-ms:displayname=Search%20Results%20in%20Desktop&crumb=fileextension%3A~<.apk%20OR%20System.Generic.String%3A.apk&crumb=location:C%3A%5CUsers%5Cssshe%5CDesktop