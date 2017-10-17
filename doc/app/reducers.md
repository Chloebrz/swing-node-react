REDUCERS
========

To keep the application easy to handle and to maintain, the reducer logic is split into 8 files. Each file handles the updates of a given slice of state or chunk of logic needed in multiple places.

We also use the redux form reducer.

### Auth
The auth reducer contains the authentication information, that is whether a user is logged in the application. Its value can be:
  - `null` - default value before getting a response from the server;
  - `false` if no user is logged in;
  - the user object from the database if an admin is logged in.
For instance, this value is used to display the correct header with the private pages links if a user is logged in .

### Profile
The profile reducer returns the last profile object fetched from the database. The values can be:
  - `null` - by default before fetching a document and getting a response from the server;
  - `false` if an error occured while fetching the information;
  - the profile object.
This reducer is used in the `/profile/:id` pages to display the name and bio of a specific user.

### Picture
The picture reducer handles the last picture object fetched from the database. As the profile reducer, the values can be:
- `null` - by default before fetching a document and getting a response from the server;
- `false` if an error occured while fetching the information;
- the picture object.
It is used to display a specific picture information before updating its properties on `/admin/update_picture/:id`.

### Pictures
The pictures reducer returns an array of the loaded picture objects from the database. It can be empty, if there is no pictures in the database, and the array is updated when a user adds, deletes, or edits a picture with success.

### Video
The video reducer handles the last video object fetched from the database. As the picture reducer, the values can be:
- `null` - by default before fetching a document and getting a response from the server;
- `false` if an error occured while fetching the information;
- the video object (its metadata).
It is used to display a specific video information before updating its properties on `/admin/update_video/:id`.

### Videos
The videos reducer returns an array containing the fetched video objects (the metadata from the database). This array is updated everytime a video is successfully posted, removed or edited by a user.

### Success
The success reducer contains information about the state of certain actions. For instance, that the user has been looged in, or a picture has been successfully posted, or all the pictures has been loaded from the database. It can be used to redirect the user after a successful event (login or picture posted) or display a specific element to the user ("Plus" button to load images).

### Errors
The errors reducer handles the error messages sent by the server. It is currenly used to display the login and sigun errors to the user if needed. E.g. "Wrong password" or "Email already taken".

### Redux form reducer

The redux form reducer is used in all the forms. It handles the values of the form. Currently, the 4 forms using this reducer are:
  - login and signup
  - update a profile information
  - add and edit a picture
  - add and edit a video.
