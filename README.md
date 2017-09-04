SWING
======

This is a new version of the **Swing** website. [Check it out!](https://swing-app.herokuapp.com/) The (very) old version is [here](https://swing.mbpmx.fr/).

----------


Technologies
------------------

### Node.js & Express
The server is implemented using **Node.js** and **Express**.
Authentication is handled with **PassportJS** (Google OAuth strategy): admin can log in/sign up with Google account.

### MongoDB
We use a **MongoDB** database to store the picture documents and the users information.

### ReactJS
The front-end is built using **ReactJS**.
Simple styling with **Bootstrap 4**.


Development
------------------

### Run the app
To run the app in development, you need a `dev.js` file in the `server/config` folder. It must contain the following keys:

    module.exports = {
	    googleClientID: "yourGoogleClientID",
	    googleClientSecret: "yourGoogleClientSecret",
	    mongoURI: "mongodb://localhost:swing/swingtest",
	    cookieKey: "aCookieKey"
	};

Then, simply run `node server/index.js`.

### Change the app
After editing the application (React side), you must use **Webpack** to generate the static assets: `webpack`.


Tests
------------------

### Server
Server side, the tests are implemented using **Mocha**, **Sinon** and **Expect** libraries.
To run the tests, a `test.js` file must be created in the `server/config` folder. It must contain the following keys:

    module.exports = {
	    googleClientID: "yourGoogleClientID",
	    googleClientSecret: "yourGoogleClientSecret",
	    mongoURI: "mongodb://localhost:swing/swingtest",
	    cookieKey: "aCookieKey"
	};


Then, run: `npm run test-server`.

### App
The ReactJS side of the application (actions and reducers) is tested with **Jest**.
To run the tests: `npm run test-app`.
To check the test coverage: `npm run test-app-coverage`
