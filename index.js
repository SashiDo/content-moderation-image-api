const dotenv = require('dotenv').config();

const path = require('path');
const express = require('express');
const { ParseServer } = require('parse-server');
const databaseUri = process.env.DATABASE_URI || process.env.MONGODB_URI;

if (!databaseUri) {
    console.log('DATABASE_URI not specified, falling back to localhost.');
}

const mountPath = process.env.PARSE_MOUNT || '/1';
const port = process.env.PORT || 1337;
const api = new ParseServer({
    databaseURI: databaseUri || 'mongodb://localhost:27017/dev',
    appId: process.env.APP_ID || 'myAppId',
    restAPIKey: process.env.REST_API_KEY || 'myRestKey',
    javascriptKey: process.env.JS_KEY || 'myJSKey',
    masterKey: process.env.MASTER_KEY || 'myMasterKey', //Add your master key here. Keep it secret!
    serverURL: process.env.SERVER_URL || `http://localhost:${port}${mountPath}`,

    // If you change the cloud/main.js to another path
    // it wouldn't work on SashiDo :( ... so Don't change this.
    cloud: process.env.CLOUD_CODE_MAIN || 'cloud/main.js',

    liveQuery: {
        classNames: [] // List of classes to support for query subscriptions example: [ 'Posts', 'Comments' ]
    }
});

// Client-keys like the javascript key or the .NET key are not necessary with parse-server
// If you wish you require them, you can set them as options in the initialization above:
// javascriptKey, restAPIKey, dotNetKey, clientKey

const app = express();

// Serve static assets from the /public folder
app.use(express.static(path.join(__dirname, '/public')));

// Mount your cloud express app
app.use('/', require('./cloud/main.js').app);

// Serve the Parse API on the /parse URL prefix
app.use(mountPath, api);

const httpServer = require('http').createServer(app);
httpServer.listen(port, () => {
    console.log(`Running on http://localhost:${port}`);
});

// This will enable the Live Query real-time server
ParseServer.createLiveQueryServer(httpServer);
