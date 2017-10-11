TESTS
=====

On the ReactJS side of the application, actions and reducers are tested with **Jest**.

Test files in `/app/tests`:
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

To run the tests: `npm run test-app`.
To check the test coverage run `npm run test-app-coverage` and open the `coverage-app/lcov-report/index.html` file.
