CONTAINERS AND COMPONENTS
=========================

Containers
----------

One React component, called container, is created for each page of the website. All the containers are sorted in two folders: the public and the private pages.
```
|-- containers
    |-- admin
        |-- addPicture.js
        |-- addVideo.js
        |-- dashboard.js
        |-- myProfile.js
        |-- updatePicture.js
        |-- updateProfile.js
        |-- updateVideo.js
        |-- videos.js
    |-- public
        |-- contact.js
        |-- description.js
        |-- home.js
        |-- images.js
        |-- login.js
        |-- noMatch.js
        |-- profile.js
        |-- signup.js
        |-- triul.js
```

Those containers use reusable components from the `app/components` folder.


Components
----------

### Elements
The `components/elements` folder contains the small reusable React components, such as a `textInput` component used in the different forms.
```
|-- components
    |-- elements
        |-- forms
            |-- basicFileInput.js
            |-- fileInput.js
            |-- textInput.js
```

### Partials
The `components/partials` folder contains bigger reusable React components used in the website, such as boxes (e.g. to display the pictures), forms (e.g. to update a profile), modals (e.g. to delete a video) and carousels. It also contains the main partials: the header and the footer.
```
|-- components
    |-- partials
        |-- boxes
            |-- adminPictureBox.js
            |-- adminProfileBox.js
            |-- adminVideoBox.js
            |-- contactBox.js
            |-- pictureBox.js
            |-- profileBox.js
        |-- carousel
            |-- picturesCarousel.js
            |-- videosCarousel.js
        |-- forms
            |-- loginSignupForm.js
            |-- pictureForm.js
            |-- profileForm.js
            |-- videoForm.js
        |-- modals
            |-- deleteModal.js
        |-- footer.js
        |-- header.js
```
