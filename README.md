# React Native Places Search App

## 📌 Overview
A React Native app that allows users to search places using Google Maps Places API, view them on a map, and maintain a local search history.

---

## ✅ Features

- 🔍 Real-time place search using Google Places API
- 🗺️ View selected location on Google Map with details
- 🕘 Auto-maintained search history (latest 10 entries)
- 📂 Re-select from history to auto-focus map
- 💾 History persisted via AsyncStorage
- 🧼 Clean, modular UI with optimized performance

---

## 🔧 Setup Instructions

### 1. Install Dependencies
```bash
npm install
# or
yarn install
```
### 2. Add Your Google API Key

You need to add your **Google Maps & Places API Key** in three locations:

#### a) `Config.ts` (root folder)
```ts
// Config.ts
export default {
  GOOGLE_GEOCODING_API_KEY: "YOUR_GOOGLE_PLACES_API_KEY"
};
```

#### b) `AndroidMenifest.xml`
- Open `android/app/src/main/AndroidManifest.xml` and add the following line **within the `<application>` tag**:

```xml
<meta-data
  android:name="com.google.android.geo.API_KEY"
  android:value="YOUR_GOOGLE_PLACES_API_KEY" />
```

#### c) `AppDelegate.mm`
- Open `AppDelegate.m` and add the following line **inside the `didFinishLaunchingWithOptions` method**:

```objc
[GMSServices provideAPIKey:@"YOUR_GOOGLE_PLACES_API_KEY"];
```

### 3. **Run the application**:
   ```bash
   npx react-native run-android  # For Android
   npx react-native run-ios      # For iOS
   ```

## Acknowledgments
Thanks for reviewing this project! Any feedback or suggestions are welcome.

## Additional Notes
- Ensure you have all the necessary permissions configured in your project for location services.
- You may want to test on real devices for optimal performance with maps and geolocation.
