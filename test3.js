const { remote } = require('webdriverio');

const opts = {
  port: 4725,  // Use port 4725 to avoid the conflict on port 4723
  path: '/',
  capabilities: {
    alwaysMatch: {
      'appium:platformName': 'Android',  // Added vendor prefix "appium:"
      'appium:deviceName': 'emulator-5554',  // Added vendor prefix "appium:"
      'appium:automationName': 'UiAutomator2',  // Added vendor prefix "appium:"
      'appium:app': './app/build/outputs/apk/debug/demo.apk',  // Added vendor prefix "appium:"
    },
    firstMatch: [{}]
  }
};

async function main() {
  const driver = await remote(opts); // Use opts here, so no need to repeat the configuration
  await driver.pause(3000);
  console.log('✅ App launched!');

  await driver.pause(3000);

  const activity = await driver.getCurrentActivity();
  console.log('📱 Current activity:', activity);

  await driver.deleteSession();
}

main().catch(console.error);
