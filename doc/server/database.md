DATABASE
========

The application data are stored in a **MongoDB** database, using the **Mongoose** framework.


Models
------

4 models define the documents within the 4 MongoDB collections of the application.

### User
The user model defines the information stored for each signed up user (the admin). Those information are:
  - name - object containing a firstname and a lastname
  - googleId - if the user signed up with Google
  - email address - must be unique
  - password - if the user signed up locally (without Google)
  - bio - string describing the user
  - and isVerified - boolean set to true if the user verified his email address and false otherwise.

### Token
The token collection allows to verify the users' email addresses. A token document contains:
  - userId - id of the user who wants to verify his email address
  - token - random string
  - createdAt - date of creation: the token is valid for one hour only.

When a user wants to verify his email address, a token document is created and saved to the database. The user receives an email with a link containing the token string. Once the link is clicked, we check that the token string exist and update the `isVerified` field of the user's document.

### Picture
The pictures displayed on the `/images` page are pictures added by admin users. Those pictures are stored in the database with the following information:
  - name - title of the picture and its legend
  - img - image object containing
    - name - name of the file
    - data - buffer
    - contentType - type of image
    - res - string used to display the image (get from the data buffer), not stored in database
  - legend - string describing the picture
  - createdAt - creation date
  - creatorId - id of the user who added the picture.

Note that all the other pictures (home page, description and triul), are stored in the `app/images` folder, as static images.

### Video
Admin users can also add videos to the website. For now, the videos files are stored directly in the `public/assets/uploads` folder and some metadata are added to the MongoDB database. Those data are the following:
  - name - title of the video and its legend
  - url - name of the video file as stored in the public folder
  - mimetype - type of the video file (mp4, webm, ...)
  - legend - string describing the video
  - createdAt - creation date
  - creatorId - id of the user who added the video.

Just as the pictures, other static videos are stored directly in the `public/assets/videos` folder.
