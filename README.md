# HappyHikers
A full stack application
HappyHikers is a Node.js web application with RESTful routing project.

Built on a MongoDB/Express/Node stack, utilizing RESTful architecture with the Bootstrap 4 CSS framework for styling.

The app performs CRUD operations for users, the campground and the comments. These pieces are referenced within the database through various associations. Actionable commands are displayed dynamically on the site (edit/delete) for campground and comments, depending on a user’s authorization/ownership. Flash messages handle error and success messages to provide the visitor with feedback.

MongoDB Atlas, a cloud-based NoSQL database is the data store in use. User authorization and authentication in place for various routes, utilizing Passport.js and related submodules. The app is deployed from a GitHub branch through a Heroku pipeline, the first time I’ve deployed a complex app to a live production environment. Much of the code has been modularized into separate pieces, including routes, middleware (session authentication), and database models.
Node.js, Express, MongoDB Atlas, Bootstrap 4, ejs, Passport
NPM modules: express, ejs, body-parser, mongoose, method-override, express-sanitizer, express-session, passport, passport-local, passport-local-mongoose, connect-flash
HappyHikers is a website where users can create posts on there favourite places and review them. In order to review or create a post, you must have an account.
This project was created using Node.js, Express, MongoDB, and Bootstrap. Passport.js was used to handle authentication.
 
 
 Features:
    
    1) Authentication:
        - User signup with username, password
        - User login with username and password
    
    2) Authorization:
        - One cannot create new posts or view user profile without being authenticated
        - One cannot edit or delete existing posts and comments created by other users
    
    3)Functionalities of posts and comments:
        - Create, view, edit and delete posts and comments
        - Upload photos in post from local
        
     4) Flash messages responding to users’ interaction with the app
     
     5) Responsive web design
        
     

