# Project Documentation

This document outlines the steps taken to set up the React Native mobile application and the challenges encountered during the process.

## Steps Taken

1.  **Project Initialization:**
    *   The project was initialized using the new React Native Community CLI command: `npx @react-native-community/cli init MobileApp`. This created the necessary folder structure, including the native `android` and `ios` projects.

2.  **Folder Structure and Code Organization:**
    *   A `src` directory was created in the project root to organize the source code.
    *   Inside `src`, two subdirectories were created:
        *   `screens`: To hold the UI for each page (`LandingScreen.js`, `LoginScreen.js`, `DashboardScreen.js`).
        *   `navigation`: To hold the navigation logic (`AppNavigator.js`).
    *   The main `App.tsx` file was updated to render the `AppNavigator`.

3.  **Dependency Installation:**
    *   The required libraries for screen-to-screen navigation were installed via npm:
        ```sh
        npm install @react-navigation/native @react-navigation/native-stack react-native-screens react-native-safe-area-context
        ```

4.  **Environment Configuration:**
    *   The `ANDROID_HOME` environment variable was set on the system to point to the location of the Android SDK.
    *   The system's `Path` variable was updated to include the Android SDK's `platform-tools` and `emulator` directories. This allows the system to find crucial tools like `adb`.

5.  **Native Code Modification for Android:**
    *   To ensure compatibility with the `react-native-screens` library, a small modification was made to the main Android activity file (`android/app/src/main/java/com/mobileapp/MainActivity.kt`) by adding the required `onCreate` method.

## Challenges Encountered

1.  **Outdated CLI:**
    *   **Error:** `TypeError: cli.init is not a function`
    *   **Cause:** An old, globally installed version of `react-native-cli` was conflicting with the modern `npx` command.
    *   **Solution:** The global package was uninstalled (`npm uninstall -g react-native-cli`), and the project was re-initialized using the correct community CLI command.

2.  **SDK Location Not Found:**
    *   **Error:** `SDK location not found. Define a valid SDK location with an ANDROID_HOME...`
    *   **Cause:** The Gradle build process could not locate the Android SDK on the development machine.
    *   **Solution:** The `ANDROID_HOME` environment variable was created and set to the correct SDK path, resolving the issue for the build system.

3.  **Application Crashing on Launch:**
    *   **Error:** The app would build successfully but crash immediately upon opening on the emulator.
    *   **Cause:** The `react-native-screens` library, a dependency for React Navigation, requires native configuration that was missing from the default project template.
    *   **Solution:** The `MainActivity.kt` file was updated with the necessary `onCreate` method, which stabilized the application and allowed the navigation to function correctly.
