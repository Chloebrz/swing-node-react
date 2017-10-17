ACTIONS
=======

The actions use the `axios` package to make http requests from the browser to the server. The results are dispatched and handled by the reducers (which take care of the application state).

For more clarity, the application actions are split into 3 files. All the types constants are defined into the `app/constants` folder, also split into 3 files:
  - `profiles_types.js`
  - `pictures_types.js`
  - and `videos_types.js`.

### Profiles
The `app/actions/profiles.js` file contains all the profiles related actions:
  - fetch the current user (logged in) document;
  - fetch a profile document given its id;
  - sign up a new user;
  - log in a user to the app;
  - update the profile object of the logged in user;
  - send the verification token to the logged in user.

### Pictures
The `app/actions/pictures.js` file contains all the pictures related actions:
  - fetch the pictures of the database;
  - fetch the pictures created by a specific user;
  - fetch a picture document given its id;
  - post a new picture;
  - delete a picture from the database;
  - update a picture properties.

### Videos
The `app/actions/videos.js` file contains all the videos related actions:
  - fetch the videos of the database;
  - fetch a video document given its id;
  - post a new video;
  - delete a video from the database and the `public/assets/uploads` folder;
  - update a video properties.
