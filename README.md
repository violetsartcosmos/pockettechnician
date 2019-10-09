# pockettechnician
React Pockettechnician
Go to 'https://github.com/facebook/react-native#-building-your-first-react-native-app' for intro installation and further instructions. This is built using:
 - React Native
 - Javascript
 - Android setup
To install make sure you have cloned this repository.
Run 'npm install' to get all the packages and use 'npm update' to update all the packages. 
Use 'npm run start' to start this program. 
Use 'react-native run-ios' on another terminal window instance to run in ios.
Use 'react-native run-android' on another terminal window instance to run in android.
Must run with device connected 
To run on IOS - Download Xcode, create a simulated device on Xcode 'Xcode:Open Developer Tools:Simulator' (Mac), make sure Xcode is updated if not see errors section.
Note: 
- Hit ⌘R in your iOS Simulator to reload the app and see your changes
To run on Android 
- Download Android Studio 
- create a simulated device in AVD Manager (preferrably Pixel 2 or newer as some options aren't availble in Nexus and older devices)
- open 'pockettech/android' in Android Studio
- open Android Virtual Device Manager
- Select the device or create a new device (preferrably Pixel 2 or newer as some options aren't availble in Nexus and older devices)
- Under Actions for the device you want click play
- the emulator should open
- open a new terminal window and run 'react-native run-android'
- The build should finish with BUILD SUCCESSFUL... and start running the app on the "emulator-##"/<DeviceNameHere>
- Enable Hot Reloading press 'Command R/Ctrl R' in app on device then click 'Enable Hot Reloading'.
- To reload manually, press 'Command R/Ctrl R' in app on device then click 'Reload'.




Errors: 
- error Failed to build iOS project. We ran "xcodebuild" command but it exited with error code 65.
    - https://stackoverflow.com/questions/55235825/error-failed-to-build-ios-project-we-ran-xcodebuild-command-but-it-exited-wit
    - Update Xcode 
- App doesn't update on virtual device
    - You may need to enable developer options in settings and setup hot reloading and/or update manually
    - Press 'Command R/Ctrl R' to see developer menu
    - https://stackoverflow.com/questions/32914665/how-do-i-shake-an-android-device-within-the-android-emulator-to-bring-up-the-d
- Need to access developer Menu
    - First make sure you have access to developer options in settings
    - If you have developer options setup in a device then press 'Command R/ Ctrl R'
    - https://stackoverflow.com/questions/32914665/how-do-i-shake-an-android-device-within-the-android-emulator-to-bring-up-the-d


FAQs
How do I configure on device options/ debugger?
- https://developer.android.com/studio/debug/dev-options (Android)