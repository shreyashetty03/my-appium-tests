const { remote } = require('webdriverio');
 
const opts = {
  port: 4725, // Custom port, still fine
  path: '/',
  capabilities: {
    alwaysMatch: {
      'appium:platformName': 'iOS',
      'appium:deviceName': 'iPhone 14', // Replace with your simulator/device name
      'appium:platformVersion': '17.0', // Match the version of your simulator/device
      'appium:automationName': 'XCUITest',
      'appium:app': './path/to/your.app', // Replace with your iOS app (.app or .ipa file)
    },
    firstMatch: [{}]
  }
};
 
async function main() {
  const driver = await remote(opts);
  await driver.pause(3000);
  console.log('✅ App launched on iOS!');
 
  await driver.pause(3000);
 
  const currentContext = await driver.getContext();
  console.log('📱 Current context:', currentContext);
 
  await driver.deleteSession();
}
 
main().catch(console.error);