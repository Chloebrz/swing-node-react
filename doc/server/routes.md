ROUTES
======

The `server/routes` folder contains all the application route handlers. They are divided into 5 files:
  - the authentication routes
  - the profiles, pictures and videos admin routes
  - and the react routes.

### Auth routes
The auth routes handle all the authentication-linked paths.

`/api/auth/*` - Sign up and log in as an admin using Google OAuth of email address and password, log out or get the current logged in user (for instance to display the proper header).

`/api/token/*` - Token logic such as sending the verification token to a user and update his profile when the email address has been verified.

### Admin routes
The admin routes handle all the database-related paths. They allow to get, post, update and delete documents from the database.

#### Profiles
The profiles routes (`/api/admin/profile/*`) allow to:
  - get a profile information
  - and update a profile document (only by the logged in user).

#### Pictures
The pictures admin routes (`/api/admin/picture/*` and `/api/admin/pictures/*`) allow to:
- get the picture documents from the database (6 by 6)
- get the pictures documents of a specific user (6 by 6)
- get a specific picture item
- add a new picture to the database
- edit a picture document (name, legend or image)
- and delete a picture.

#### Videos
The videos routes (`/api/admin/video/*` and `/api/admin/videos/*`) allow to:
  - get all the video documents from the database
  - get a specific video item
  - add a new video (create a document in the database with the metadata and add the video file to the `public/assets/uploads` folder)
  - edit a video document (name or legend)
  - and delete a video.

### React routes
The react routes render the application page, from the `public/index.html` file.

For all `/admin/*` paths, corresponding to the private pages, the user must be logged in to access the page. Otherwise he is redirected to the home page.
