# AngularBootstrap

A bootstrap repository for quickly starting an Angular project.

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



## Version

The project is currently under the version 18.0.2 of angular

## Local server

Use local server to mock backend service responses

### Install local json-server

```
$ npm install json-server@0.17.4 --save-dev
```

### Launch local json-server

```
$ cd server
$ node server.js
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.