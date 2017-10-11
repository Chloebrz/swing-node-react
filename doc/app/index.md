SWING APP
=========

The S'Wing application is implemented using **ReactJS**.
Redux. Redux forms.
Simple styling with **Bootstrap 4**.

----------

The S'Wing application is divided into two parts:
 - the public pages
 - and the private pages.


Public pages
------------

The public pages present the S'Wing project to visitors. Description, images, videos, contact.


Private pages
-------------

The private pages are accessible after login. The admin (the S'Wing people), can upload new pictures and videos, edit and delete them.


Folder structure
----------------

```
|-- app
    |-- actions
    |-- components
        |-- elements
            |-- forms
        |-- partials
            |-- boxes
            |-- carousel
            |-- forms
            |-- modals
            |-- footer.js
            |-- header.js
    |-- constants
    |-- containers
        |-- admin
        |-- public
    |-- css
        |-- elements
        |-- min
        |-- pages
        |-- partials
        |-- icons.css
        |-- main.css
    |-- images
        |-- home
        |-- icons
        |-- placeholders
        |-- theorie
        |-- triul
        |-- s-wing.png
    |-- reducers
    |-- tests
        |-- actions
        |-- reducers
    |-- admin_routes.js
    |-- index.js
    |-- routes.js
```
