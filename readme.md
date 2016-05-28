# React Vinyl Collection App

## To-Do (Level 1)

* Be able to start with dummy data and display that album to the page

## To-Do (Level 2)

* Be able to store the data to the database and fetch from the database instead of calling Discogs every time. 

* Be able to add an album to the collection  

## API Design

GET /
	Login screen

POST/
	Redirect to collection (index) if successful

GET/ collection
	Render collection

GET/ search
	on submit = dynamically render those results after user does not type after 800 milliseconds

POST/ add
	adds album, saves to DB collection

POST/ delete
	deletes album, removes from DB collection

GET/ logout
	kill session, redirect to login

the API should be predictable


## Database Schema
User
	_id:Number
	username: String
	password: String
	vinylCollection:Array[{discogsId: Number, notes: String}]

Album
	_id:Number
	data: {}

Artist
	_id:Number
	name: String
	



Master Release Versions format property