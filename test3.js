const { remote } = require('webdriverio');

const opts = {
  path: '/',
  port: 4723,
 capabilities: {
  alwaysMatch: {
    'appium:platformName': 'Android',
    'appium:deviceName': 'emulator-5554',
    'appium:automationName': 'UiAutomator2',
    'appium:app': 'C:/Users/ssshe/AndroidStudioProjects/MyFirstApplication/app/build/outputs/apk/debug/demo.apk'
  },
  firstMatch: [{}]
}
};

async function main() {
  const driver = await remote(opts);

  console.log('✅ App launched!');

  await driver.pause(3000);

  const activity = await driver.getCurrentActivity();
  console.log('📱 Current activity:', activity);

  await driver.deleteSession();
}

main().catch(console.error);