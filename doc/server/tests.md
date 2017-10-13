TESTS
=====

Test and coverage
-----------------

To run the tests, a `test.js` file must be created in the `server/config` folder. It must contain the following keys:

    module.exports = {
	    googleClientID: "yourGoogleClientID",
	    googleClientSecret: "yourGoogleClientSecret",
	    mongoURI: "mongodb://localhost:swing/swingtest",
	    cookieKey: "aCookieKey",
        emailService: "anEmailService",
        emailUser: "anEmailUser",
        emailPassword: "anEmailPassword"
	};


Then, run: `npm run test-server`.

The test coverage is handled by **Istanbul** (with nyc). To check the test coverage:
  1. run `npm run test-server-coverage`
  2. open the `coverage/index.html` file
  3. navigate.


Folder structure
----------------

One test file is created for each middleware, model and route and named '_file_.test.js'.

The test files in are located in the `server/tests` folder:
```
|-- tests
    |-- middlewares
        |-- auth.test.js
    |-- models
        |-- picture.test.js
        |-- token.test.js
        |-- user.test.js
        |-- video.test.js
    |-- routes
        |-- abefore.test.js
        |-- admin_pictures.test.js
        |-- admin_profiles.test.js
        |-- admin_videos.test.js
        |-- auth.test.js
        |-- react.test.js
    |-- seed
        |-- pictures-seed.js
        |-- users-seed.js
        |-- videos-seed.js
```


Implementation
--------------

Server side, the tests are implemented using **Mocha**, **Sinon** and **Expect** librairies together with **Supertest** and **Proxyquire**.

The `tests/seed` folder contains functions adding and removing users, pictures and videos to the database. Those functions are used in the `beforeEach` of the routes tests and populate the database with useful data depending on the routes to test.

(Until better solution) the `tests/routes/abefore.test.js` file contains a global `before` function in which the dependencies are stubbed using **Sinon** and **Proxyquire** (the auth middleware and the passport, nodemailer and multer packages).
