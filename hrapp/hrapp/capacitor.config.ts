import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'hrapp',
  webDir: 'www',
  cordova: {
    preferences: {
      'android-minSdkVersion': '24',
      'android-targetSdkVersion': '34',
      'android-versionCode': '200'
    }
  }
};

export default config;
