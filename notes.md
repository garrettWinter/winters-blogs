<!-- NPM Packages:
	npm i express-handlebars
	npm i mysql2
	npm i sequelize
	npm i dotenv
	npm i bcrypt
	npm i express-session
	npm i connect-session-sequelize -->
	
<!-- Database Structure:

	Users Table
		User ID (PK, Auto Inc, FK (posts & Comments)
		User Name (VARCHAR(30), Not NULL)
		Password  (VARCHAR(30), Not NULL)
		Date created (DEFAULT)
		Date Updated (DEFAULT)
		
	Posts Table
		Post ID  (PK, Auto Inc)
		Post Title (VARCHAR(60), Not NULL)
		Post Body (Text, not null
		User ID (INT, Not Null,  FK User ID)
		Date Created (DEFAULT)
		Date Updated (DEFAULT)
		
	Comments Table
		Comment ID (PK, Auto Inc)
		Post ID (INT, FK posts)
		Commenting User ID (INT, FK User ID)
		Comment
		Date Created (DEFAULT)
		Date Updated (DEFAULT) -->
		


Pie in Sky:
	Add 404 Redirect
		Timeout on 404 page before redirect to index page.
	If user logged in while on login or signup page, will notify the user of this at the top of the page.


Upcomign Items:

Draft HTML
    Login/Signup Page
    Dashboard
	Viewing a specific Post
Implement User Authentication
    ????
Hooks:
    Need one on create and on delete for password for hashing
Routes
    Setup a General 404 error 
