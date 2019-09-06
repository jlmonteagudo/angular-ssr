# Ssr

Sample project of Angular SSR with deployment in Firebase.

## Steps to run

- clone this repo
- npm install
- npm run build:ssr
- cd functions
- npm install
- npm run build
- firebase deploy

## Steps to prepare an Angular project manually for SSR and deploy in Firebase

- ng add @nguniversal/express-engine --clientProject YOUR-PROJECT-NAME
- npm install -g firebase-tools
- firebase login
- firebase init
- Which firebase CLI features do you want to setup? Functions and Hosting
- What language would you like to use to write Cloud Functions? TypeScript 
- What do you want to use as your public directory? dist/browser
- Configure as a single page app? Y
- File index.html already exists. Overwrite? N
- Update firebase.json: replace "destination": "/index.html" by "function": "ssr"
- Update server.ts: add export to the app initialization: export const app = express(); comment out the last three lines
- Update webpack.server.config.js: add this to output: library: 'app', libraryTarget: 'umd'
- Update webpack.server.config.js: update this property: externals: [/node_modules/]
- npm run build:ssr
- cd functions
- npm i fs-extra
- create the file copy-angular-app.js in the folder functions
- Update functions/package.json: "build": "node copy-angular-app && tsc",
- Update functions/src/index.ts
- npm run build
- firebase deploy





