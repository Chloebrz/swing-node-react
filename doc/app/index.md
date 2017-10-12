SWING APP
=========

Technologies
------------

The user interface of the S'Wing application is implemented using **ReactJS** together with **Redux**, to easily manage the application state.

A simple styling is added with **Bootstrap 4** and the **Font Awesome** font.


Public and private pages
------------------------

The S'Wing application is divided into two parts:
 - the public pages, accessible to all users;
 - and the private pages, for the admin.


### Public pages
The public pages describe the S'Wing project. Accessible to all users, it contains a description of the concept together with schemes, pictures and videos of the various prototypes and a contact page.


### Private pages
The private pages are accessible after login. The admin (the S'Wing people), can upload new pictures and videos, edit and delete them. Those pages allow the different members of the team to easily update the content of the website when the project evolve (new prototypes and tests for instance).


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
