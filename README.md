# AngularBootstrap

A bootstrap repository for quickly starting an Angular project. this Include the following elements

- Angular project structured accourding to the best practices
- Local Json server to run locally
- Production configuration for building a dist folder
- An ios/Android Capacitor generated projects

## Version

The project is currently under the version 18.0.2 of angular

## Local server

Use local server to mock backend service responses

### Install local json-server

```
$ npm install json-server --save-dev
```

### Launch local json-server

```
$ cd server
$ node server.js
```

## Development server

Install dependencies with `ng install`

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Capacitor for Android and ios

Change the app_name for ios (Info.plist) and android (strings.xml) by your own application name

```
# value to change
angular-bootstrap
```

Put your own bundle name in the project (capacitor.config.ts, build.gradle, MainActivity, strings.xml and project.pbxproj)

```
# value to change
com.example.app
```

### Run on iOS and Android

build the dist folder before running mobile Apps

```
$ ng build --configuration production
```

Install the necessary dependencies

```
% npm i @capacitor/core
% npm i -D @capacitor/cli
% npm i @capacitor/android @capacitor/ios
% npx cap add ios
% npx cap add android
% npx cap sync
```

#### start Xcode and Android Studio

To open the project in Xcode, run

```
% npx cap open ios
```

Alternatively, you can open Xcode manually by running:

```
% open ios/App/App.xcworkspace
```

for more details see [capacitor ios doc](https://capacitorjs.com/docs/ios)

To open the project in Android Studio, run

```
% npx cap open android
```

for more details see [capacitor android doc](https://capacitorjs.com/docs/android)
