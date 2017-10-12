SERVER
======

Technologies
------------

### Node.js & Express
The server is implemented using **Node.js** and **Express**.
Authentication is handled with **PassportJS**:
 - Google OAuth strategy: admin can log in/sign up with Google account
 - Local strategy: admin can log in/sign up with an email address and a password

### MongoDB
A **MongoDB** database is used to store website data:
  - the picture documents (image with name and legend)
  - the video metadata (name and legend)
  - the users information
  - and the tokens data (to verify users email addresses).

To ease the use of the database, we use the **Mongoose** library.


Folder structure
----------------

```
|-- server
    |-- config
        |-- dev.js
        |-- keys.js
        |-- prod.js
        |-- test.js
    |-- db
        |-- mongoose.js
    |-- middlewares
        |-- auth.js
    |-- models
        |-- picture.js
        |-- token.js
        |-- user.js
        |-- video.js
    |-- routes
        |-- admin_pictures.js
        |-- admin_profiles.js
        |-- admin_videos.js
        |-- auth.js
        |-- react.js
    |-- services
        |-- google.js
        |-- local-login.js
        |-- local-signup.js
        |-- passport.js
    |-- tests
        |-- middlewares
        |-- models
        |-- routes
        |-- seed
```
