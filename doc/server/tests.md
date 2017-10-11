TESTS
=====

Server side, the tests are implemented using **Mocha**, **Sinon** and **Expect** librairies together with **Supertest** and **Proxyquire**.

Test files in `/server/tests`:
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
Coverage is handled by **Istanbul** (with nyc). To check the test coverage run `npm run test-server-coverage` and open the `coverage/index.html` file.
