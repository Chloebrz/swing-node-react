TESTS
=====

Test and coverage
-----------------

To run the tests: `npm run test-app`.

To check the test coverage:
  1. run `npm run test-app-coverage`
  2. open the `coverage-app/lcov-report/index.html` file
  3. navigate through the files.


Folder structure
----------------

One test file is created for each action and reducer and named '_action_.test.js' (or '_reducer_.test.js').

The test files are located in the `app/tests` folder:
```
|-- tests
    |-- actions
        |-- pictures.test.js
        |-- profiles.test.js
        |-- videos.test.js
    |-- reducers
        |-- auth.test.js
        |-- errors.test.js
        |-- picture.test.js
        |-- pictures.test.js
        |-- profile.test.js
        |-- success.test.js
        |-- video.test.js
        |-- videos.test.js
```


Implementation
--------------

The actions and the reducers of the application are tested with **Jest** and the **Expect** library.

In the actions tests, we use **redux-mock-store** to mock the store and check that the correct actions have been called (right type and payload).

To test only the redux part of the application, the axios calls are mocked with **nock**, e.g. `nock(host).post("/api/admin/pictures", payload).reply(200, data);`.
