# JimmyJams


[JimmyJams Live Site](https://jimmyjams.herokuapp.com/#/)


JimmyJams is a full stack replica of the popular online music distribution platform, SoundCloud,  in which users can listen and upload their favorite tracks.  (single-page application)

(Ruby on Rails, PostgreSQL, React, Redux, Webpack, AWS, Heroku)	

![JimmyJams Demo](https://github.com/jiminey/JimmyJams/blob/master/app/assets/images/demologin.gif?raw=true)

# Technology Used 

* Ruby on Rails
* PostgreSQL
* React
* Redux
* Webpack
* AWS
* Jbuilder
* Heroku

# Features 

### <u>User authorization </u>

Users can create an account or use the demo login functionality. I implemented user authentication with indicative validation errors that utilizes BCrypt salts in which resulted in strengthened security.

### <u> Song interaction </u>

Users can upload, delete, and listen to songs on the site (SONG CRUD). I constructed top-level music player that integrated Redux’s global store with conditional logic and AWS S3 to fetch audio data in the form of JSON objects, thus ensuring for persistent music streaming during navigation. 

### <u> Music player interaction </u>

Users can pause, play and skip through points of a song with the seekbar. I constructed a seekbar that changes the current time of the song based on the position of the mouse relative to the seekbar through on-click event listeners.

### <u> Search interaction </u>

Users can search their favorite song non-case sensitive through the search bar.



